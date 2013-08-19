import cocoon.i18n.Locale;
import cocoon.log.ILogger;
import cocoon.log.ConsoleLogger;
import cocoon.message.LogMessage;
import cocoon.ModuleManager;
import minject.AsyncInjector;
import cocoon.module.*;

class App
{
	public static var it = thx.culture.Culture.embed("it-IT");
	public static var en = thx.culture.Culture.embed("en-US");
	static function main()
	{
		var trans  = new thx.translation.Translation(),
			locale = new Locale(en, trans);

		trans.addDomain(en);
		trans.addDomain(it);

		trans.addSingular("full name", "nome completo", it.name);
		trans.addSingular("score", "punteggio", it.name);

		var manager = new ModuleManager();

		manager.injector.mapSingletonOf(ILogger, ConsoleLogger);
		manager.injector.mapValue(String, "cocoon", "api_field");
		manager.injector.mapValue(Locale, locale);

		manager.register(JavaScriptAPIModule);
		manager.register(JavaScriptErrorInterceptModule);
		manager.register(LogModule);
		manager.register(VersionModule);

		manager.communicator.queue.queue(new LogMessage("hello Debug!", Debug));
		manager.communicator.queue.queue(new LogMessage("hello Error!", Error));
		manager.communicator.queue.queue(new LogMessage("hello Info!", Info));
		manager.communicator.queue.queue(new LogMessage("hello Log!", Log));
		manager.communicator.queue.queue(new LogMessage("hello Warning!", Warning));

		manager.register(SampleModule);
	}
}

class SampleModule extends cocoon.Module
{
	var view : SampleView;

	@inject public var locale : Locale;

	override public function connect()
	{
		var model = new SampleModel();
		view = new SampleView(model, locale);
		haxe.Timer.delay(view.set.bind("name", "Why?"), 500);
		haxe.Timer.delay(view.set.bind("name", "Franco"), 1000);
		haxe.Timer.delay(view.set.bind("score", 77.5), 750);
		haxe.Timer.delay(view.set.bind("score", 10334859.33), 1500);

		haxe.Timer.delay(function() locale.culture = App.it, 2000);
		haxe.Timer.delay(injector.getInstance(ModuleManager).unregister.bind(SampleModule), 5000);
	}

	override public function disconnect()
	{
		view.teardown();
	}
}

class SampleView extends cocoon.view.LocalizedView<SampleModel>
{
 	public function new(data : SampleModel, locale : Locale)
 	{
 		var el = js.Browser.document.getElementById("main");
 		super(el, locale, data);
 	}
}

class SampleModel
{
	public var name : String;
	public var score : Float;
	public function new()
	{

	}

	public function upName()
	{
		return "Franco".toUpperCase();
	}
}