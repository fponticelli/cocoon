package cocoon.i18n;

import thx.culture.Culture;
import thx.culture.Format;
import thx.translation.ITranslation;
import thx.react.Signal;

class Locale 
{
	@:isVar public var culture(default, set) : Culture;
	@:isVar public var translation(default, null) : ITranslation;

	public var signals(default, null) : {
		public var change(default, null) : Signal0;
	};

	public function new(culture : Culture, translation : ITranslation)
	{
		signals = { change : new Signal0() };
		this.translation = translation;
		this.culture = culture;
	}

	public function singular(id : String) : String
		return translation.singular(id);
	public function plural(ids : String, idp : String, quantifier : Int) : String
		return translation.plural(ids, idp, quantifier);
	public function format(pattern : String, params : Array<Dynamic>)
		return Format.format(singular(pattern), params, culture);

	public function set_culture(culture : Culture)
	{
		this.culture       = culture;
		translation.domain = culture;
		signals.change.trigger();
		return culture;
	}
}