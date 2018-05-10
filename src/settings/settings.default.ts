export const settings = {
	"DummyObjectForTestingPurposes": {
		"Description": "Do not remove under any circumstances!",
		"Value": "Testing."
	},
	"AugmentationDefault_WhitelistedDomains": {
		"Description": "The set of domains on which we are changing the default clip mode to Augmentation.",
		"Value": [
			"^https?:\\/\\/www\\.onenote\\.com",
			"[^\\w]wikipedia",
			"[^\\w]nytimes",
			"[^\\w]lifehacker",
			"[^\\w]msn",
			"[^\\w]theguardian",
			"[^\\w]forbes",
			"[^\\w]bbc",
			"[^\\w]huffingtonpost",
			"[^\\w]businessinsider",
			"[^\\w]washingtonpost",
			"[^\\w]medium",
			"[^\\w]buzzfeed",
			"[^\\w]bbc",
			"[^\\w]theverge",
			"[^\\w]techcrunch",
			"[^\\w]amazon",
			"[^\\w]allrecipes",
			"[^\\w]foodnetwork",
			"[^\\w]seriouseats",
			"[^\\w]epicurious",
			"[^\\w]support.office.com",
			"[^\\w]blogs.office.com",
			"[^\\w]blogs.technet.com",
			"[^\\w]youtube\\.com\\/watch(\\?v=(\\w+)|.*\\&v=(\\w+))",
			"[^\\w]youtube\\.com\\/embed\\/(\\w+)",
			"[^\\w]vimeo\\.com.*?\\/(\\d+)($|\\?|\\#|\\/$)",
			"[^\\w]vimeo\\.com.*?\\/(\\d+)\\/\\w+:\\w+(\\/|$)",
			"[^\\w]vimeo\\.com.*?\\/ondemand\\/\\w+$",
			"[^\\w]khanacademy\\.org(.*)\/v\/(.*)",
			"\\/(\\d{2}|\\d{4})\\/\\d{1,2}\\/",
			"\\/(\\d{2}|\\d{4})-\\d{1,2}-\\d{1,2}\\/"
		]
	},
	"PageNav_BlacklistedDomains": {
		"Description": "The set of domains where we do not want to show any PageNav tooltip experience",
		"Value": [
			"^(http(s)?)://(login\\.live\\.com)",
			"^(http(s)?)://(login\\.microsoftonline\\.com)"
		]
	},
	"PdfDomains": {
		"Description": "PDF regexes",
		"Value": [
			"^.*(\\.pdf)$"
		]
	},
	"RecipeDomains": {
		"Description": "The set of domains where we want to show a Recipe tooltip",
		"Value": [
			"^(http(s)?)://(12tomatoes\\.com/)()([^/]*-[^/]*)/$",
			"^(http(s)?)://(abc\\.go\\.com/shows/the-chew/recipes/)([^/]*-[^/]*)$",
			"^(http(s)?)://(([^ ]{1,18})?)(allrecipes\\.com)()/(recipe/.*)$",
			"^(http(s)?)://((\\.{1,18}\\.)?)(allrecipes\\.)(com)/(recipe/[^/]+(/)?(/detail\\.aspx\\??)?)$",
			"^(http(s)?)://()(allrecipes\\.com)()/([r|R]ecipe/[^/]+/Detail\\.aspx)$",
			"^(http(s)?)://()(allrecipes\\.com)()/(recipe/.*)$",
			"^(http(s)?)://(cookieandkate\\.com)()/(\\d{4})/(.+)$",
			"^(http(s)?)://(cooking\\.)(nytimes\\.com)()/(recipes/(.*))$",
			"^(http(s)?)://()(cookpad\\.com)()/(recipe/[0-9]+$)$",
			"^(http(s)?)://()(damndelicious\\.net)()/\\d+/\\d+/\\d+/.+/$",
			"^(http(s)?)://(food52\\.com)()/recipes/[0-9]+-.+$",
			"^(http(s)?)://(minimalistbaker.com)/([^/]*-[^/]*)/$",
			"^(http(s)?)://(paleoleap.com)/([^/]*-[^/]*)/$",
			"^(http(s)?)://(pinchofyum.com)/([^/]*-[^/]*)$",
			"^(http(s)?)://(recipe\\.rakuten\\.co\\.jp)()/recipe/[0-9]+/$",
			"^(http(s)?)://()(thepioneerwoman\\.com)()/(cooking/.+/)$",
			"^(http(s)?)://((www\\.)?)(allrecipes\\.com)()/([r|R]ecipe/[^/]+/(Detail\\.aspx)?)$",
			"^(http(s)?)://((www\\.)?)(allrecipes\\.com)()/([R|r]ecipe/.*)$",
			"^(http(s)?)://(www\\.)(bbc\\.co\\.uk/food/recipes/[^/]*_\\d+)$",
			"^(http(s)?)://(www\\.)(bbcgoodfood\\.com)()/(recipes/[0-9]+/(.*))$",
			"^(http(s)?)://(www\\.)(bbcgoodfood\\.com)/recipes/([^/]*-[^/]*)$",
			"^(http(s)?)://(www\\.)(bettycrocker\\.com)()/(recipes/[^\\/]+/[0-9a-f-]{36}/?)$",
			"^(http(s)?)://(www\\.)(bonappetit\\.com)()/(recipe/(.*))$",
			"^(http(s)?)://(www\\.budgetbytes\\.com)/\\d{4}/\\d{2}/(.*)/",
			"^(http(s)?)://((www\\.)?)(chowhound\\.com)()/(recipes/.*)$",
			"^(http(s)?)://(www\\.cookingclassy\\.com)/\\d{4}/\\d{2}/(.*)/",
			"^(http(s)?)://(www\\.delish\\.com)/cooking/recipe-ideas/recipes/a\\d+/[^/]*-[^/]*/",
			"^(http(s)?)://(www\\.)(eatingwell\\.com)()/(recipe/\\d+/.+/)$",
			"^(http(s)?)://(www\\.)(epicurious\\.com)()/(recipes/food/views/.*)$",
			"^(http(s)?)://(www\\.)(food\\.com)()/(recipe/.*)$",
			"^(http(s)?)://(www\\.)(foodandwine\\.com)()/(recipes\\/.+)$",
			"^(http(s)?)://(www\\.)(foodnetwork)(\\.ca)/(recipe/(.*))$",
			"^(http(s)?)://(www\\.)(foodnetwork\\.com)()/(recipe-collections/.*)$",
			"^(http(s)?)://(www\\.)(foodnetwork\\.com)()/(recipes.*)$",
			"^(http(s)?)://(www\\.)(foodnetwork\\.com)()/(recipes/.*)$",
			"^(http(s)?)://(www\\.)(marthastewart\\.com)()/(([0-9]+|recipe)/.*)$",
			"^(http(s)?)://(www\\.)(marthastewart\\.com)()/([0-9]+/[^/]+)$",
			"^(http(s)?)://(www\\.)(myrecipes\\.com)()/(recipe/.*)$",
			"^(http(s)?)://(www\\.)(myrecipes\\.com)()/(recipe/.*-[0-9]*/)$",
			"^(http(s)?)://(www\\.)(myrecipes\\.com)()/(recipe/.*)$",
			"^(http(s)?)://(www\\.)(myrecipes\\.com)()/(recipe/[^/]+.*)$",
			"^(http(s)?)://(www\\.)(realsimple\\.com)()/(food-recipes/browse-all-recipes/[^\\/]+/index\\.html)$",
			"^(http(s)?)://((www)?\\.)(seriouseats\\.com)()/([Rr]ecipes\\/.*\\.(html|HTML)(.*)?)$",
			"^(http(s)?)://(www\\.)(simplyrecipes\\.com)()/(recipes/[^/]*/)$",
			"^(http(s)?)://((www\\.)?)(simplyrecipes\\.com)()/(recipes/[^/]*/)$",
			"^(http(s)?)://((www\\.)?)(simplyrecipes\\.com)()/(recipes/.*)$",
			"^(http(s)?)://(www\\.)(tasteofhome\\.com)()/([R|r]ecipes/[^/]+$)$",
			"^(http(s)?)://(www\\.)(tasteofhome\\.com)()/(recipes/[^/]*/?)$",
			"^(http(s)?)://(www\\.)(tasteofhome\\.com)()/(recipes/[^\\/]+/?)$",
			"^(http(s)?)://(www\\.)(yummly\\.com)()/(recipe/[^/]+)$",
			"^(http(s)?)://((www\\.)?)(yummly\\.com)()/(recipe/.*)$",
			"^(http(s)?)://(.*)(yummly\\.com)()/(recipe/.+)$"
		]
	},
	"ProductDomains": {
		"Description": "The set of domains where we want to show a Product tooltip",
		"Value": [
			"^(http(s)?)://store\\.steampowered.com/app/\\d+/.*$",
			"^(http(s)?)://(www\\.)(amazon\\.com)()/(gp/product/[^/]+/.*)$",
			"^(http(s)?)://(www\\.)(amazon\\.com)()/(dp/[^/]+.*)$",
			"^(http(s)?)://(www\\.)(amazon\\.com)()/([^/]+/dp/[^/]+)$",
			"^(http(s)?)://(www\\.)(amazon\\.in)()/((.+/)?(dp|gp/product)\\/\\w{10,13}([^\\w].*)?)$",
			"^(http(s)?)://(www\\.)(amazon\\.)([a-zA-Z\\.]+)/([^/]+/dp/.*)$",
			"^(http(s)?)://(www\\.)(bedbathandbeyond\\.com)(/store/product/)([^/]*-[^/]*/)(\\d+.*)",
			"^(http(s)?)://(www\\.)(ebay\\.com)()/(itm/[^/]+/.*)$",
			"^(http(s)?)://(www\\.)(etsy\\.com)()/(listing)/(\\d+/.*)$",
			"^(http(s)?)://(www\\.)(homedepot\\.com)()/(p/[^/]+/.*)$",
			"^(http(s)?)://(www\\.)(newegg\\.com)()/(Product/Product\\.aspx\\?Item=.+)$",
			"^(http(s)?)://(www\\.)(overstock\\.com)()/(.+/.+/[0-9]+/product\\.html.*)$",
			"^(http(s)?)://(www\\.)(staples\\.com)()/(.*/product_[^/]+)$",
			"^(http(s)?)://(www\\.)(target\\.com)()/(p/.+)$",
			"^(http(s)?)://(www\\.)(walmart\\.com)()/(ip/.*)$"
		]
	},
	"App_Id": {
		"Description": "For identifying the Clipper during interaction with external services",
		"Value": "OneNote Clipper OSS"
	}
};
