package cocoon.view;

import cocoon.i18n.Locale;
import js.html.Element;
import ractive.Ractive;
import ractive.View;

@:skipTemplate
class LocalizedView<T> extends View<T>
{
	var locale : Locale;
	public function new(el : Element, locale : Locale, data : T)
	{
		this.locale = locale;
		super({
			el : el,
			data : cast { data : data },
			template : '{{#data}}${getTemplate()}{{/data}}'
		});
		locale.signals.change.add(updateLocalization);
		updateLocalization();
	}

	public function updateLocalization()
	{
		super.set("culture", locale.culture);
		super.set("_", function(v) return locale.singular(v));
		super.set("__", function(s, p, q) return locale.plural(s, p, q));
		super.set("_f", function(pattern) {
			var args : Array<Dynamic> = untyped __js__("Array.prototype.slice.call(arguments, 1)");
			return locale.format(pattern, args);
		});
	}

	override function get_data() : T
		return untyped ractive.data.data;

	override function set_data(v : T)
	{
		untyped ractive.data.data = v;
		super.update("data");
		return v;
	}

	static function k(keypath : String)
		return null == keypath ? 'data' : 'data.$keypath';

	override public function get<T>(keypath : String) : T
		return super.get(k(keypath));

	override public function set<T>(keypath : String, value : T, ?complete : Void -> Void)
	{
		super.set(k(keypath), value, complete);
	}

	override public function setAll(values : Dynamic, ?complete : Void -> Void)
		super.setAll({ data : values }, complete);

	override public function animate(keypath : String, value : Dynamic, ?options : RactiveAnimateOptions)
		super.animate(k(keypath), value, options);

	override public function animateMany(values : Dynamic, ?options : RactiveAnimateOptions)
		super.animateMany({ data : values }, options);

	override public function update(?keypath : String, ?complete : Void -> Void)
	{
		super.update(k(keypath), complete);
	}

	override public function observe(keypath : String, complete : Dynamic -> Dynamic -> Void, ?options : { ?init : Bool, ?context : Dynamic }) : RactiveCancelObject
		return super.observe(k(keypath), complete, options);

	override public function observeMany(map : Dynamic<Dynamic -> Dynamic -> Void>, ?options : { ?init : Bool, ?context : Dynamic }) : RactiveCancelObject
		return super.observeMany(cast { data : map }, options);
}

/*
typedef TranslateSingular = String -> String;
typedef TranslatePlural = String -> String -> Int -> String;
typedef TranslateFormat = String -> String;
typedef LocaleData<T> = { data : T, _ : TranslateSingular, __ : TranslatePlural, _f : TranslateFormat };
*/