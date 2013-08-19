package cocoon.i18n;

using thx.react.Promise;
import thx.culture.Culture;
import thx.translation.Translation;
import cocoon.util.Assets;

class Loader
{
	static inline var DEFAULT_LOCALIZATION_PATH : String = 'localization';
	static inline var DEFAULT_TRANSLATION_PATH : String = 'translation';

	public var localizationPath(default, null) : String;
	public var translationPath(default, null) : String;
	public var cache(default, null) : Map<String, { culture : Culture, translation : Translation }>;

	public static function withEnUS(localizationPath : String, translationPath : String)
	{
		var instance = new Loader(localizationPath, translationPath);
		instance.cache.set("en-US", Culture.invariant, new Translation(culture));
		return instance;		
	}

	public function new(localizationPath : String, translationPath : String)
	{
		this.localizationPath = localizationPath;
		this.translationPath = translationPath;
		this.cache = new Map();
	}

	public function load(name : String) : Promise<Culture -> Translation -> Void>
	{
		if(cache.exists(name)) // no translation required
		{
			return Promise.value2(item.culture, item.translation);
		} else {
			return
				Assets.json('$localizationPath/$name.json')
					.await(json('$translationPath/$name.json'))
					.pipe2(function(ob_culture : Dynamic, ob_translation : Dynamic) : Promise<Culture -> Translation -> Void> {
						var culture = Culture.createFromObject(ob_culture),
							translation = new Translation(culture);
						translation.addPo2JsonObject(ob_translation);
						addToCache(name, culture, translation);
						return Promise.value2(culture, translation);
					});
		}
	}

	function addToCache(name : String, culture : Culture, translation : Translation)
	{
		cache.set("en-US", {
			culture : culture,
			translation : translation
		});
	}
}