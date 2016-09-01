import {Constants} from "../constants";
import {ResponsePackage} from "../responsePackage";

import * as Log from "../logging/log";
import {Logger} from "../logging/logger";

import {Storage} from "../storage/storage";

import {CachedHttp, GetResponseAsync, TimeStampedData} from "./cachedHttp";

/**
 * Allows the creation of HTTP GET requests to Clipper-specific endpoints, as well as caching of the
 * result. Also logs attempts to get values from these endpoints.
 */
export class ClipperCachedHttp extends CachedHttp {
	private static defaultExpiry = 12 * 60 * 60 * 1000; // 12 hours

	private logger: Logger;

	constructor(cache: Storage, logger?: Logger) {
		super(cache);
		this.logger = logger;
	}

	public setLogger(logger: Logger) {
		this.logger = logger;
	}

	public static getDefaultExpiry(): number {
		return ClipperCachedHttp.defaultExpiry;
	}

	// Override
	public getAndCacheFreshValue(key: string, getRemoteValue: GetResponseAsync, updateInterval = ClipperCachedHttp.defaultExpiry): Promise<TimeStampedData> {
		if (!key) {
			this.logger.logFailure(Log.Failure.Label.InvalidArgument, Log.Failure.Type.Unexpected,
				{ error: "getAndCacheFreshValue key parameter should be passed a non-empty string" }, "" + key);
			return Promise.resolve(undefined);
		} else if (updateInterval < 0) {
			this.logger.logFailure(Log.Failure.Label.InvalidArgument, Log.Failure.Type.Unexpected,
				{ error: "getAndCacheFreshValue updateInterval parameter should be passed a number >= 0" }, "" + updateInterval);
			updateInterval = 0;
		}

		let loggedGetRemoteValue = this.addLoggingToGetResponseAsync(key, getRemoteValue, updateInterval);

		return super.getAndCacheFreshValue(key, loggedGetRemoteValue, updateInterval);
	}

	private addLoggingToGetResponseAsync(key: string, getResponseAsync: GetResponseAsync, updateInterval: number): GetResponseAsync {
		return () => {
			// Need to download a fresh copy of the code.
			let fetchNonLocalDataEvent: Log.Event.PromiseEvent = new Log.Event.PromiseEvent(Log.Event.Label.FetchNonLocalData);
			fetchNonLocalDataEvent.setCustomProperty(Log.PropertyName.Custom.Key, key);
			fetchNonLocalDataEvent.setCustomProperty(Log.PropertyName.Custom.UpdateInterval, updateInterval);

			return new Promise<ResponsePackage<string>>((resolve, reject) => {
				getResponseAsync().then((responsePackage) => {
					if (responsePackage.request) {
						ClipperCachedHttp.addCorrelationIdToLogEvent(fetchNonLocalDataEvent, responsePackage.request);
					}
					resolve(responsePackage);
				}, (error) => {
					fetchNonLocalDataEvent.setStatus(Log.Status.Failed);
					fetchNonLocalDataEvent.setFailureInfo(error);
					reject(error);
				}).then(() => {
					this.logger.logEvent(fetchNonLocalDataEvent);
				});
			});
		};
	}

	private static addCorrelationIdToLogEvent(logEvent: Log.Event.PromiseEvent, request: XMLHttpRequest) {
		let correlationId = request.getResponseHeader(Constants.HeaderValues.correlationId);
		if (correlationId) {
			logEvent.setCustomProperty(Log.PropertyName.Custom.CorrelationId, correlationId);
		}
	}
}
