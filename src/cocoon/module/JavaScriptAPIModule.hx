package cocoon.module;

import cocoon.message.JavaScriptAPI;
import cocoon.Module;

class JavaScriptAPIModule extends Module
{
	@inject("api_field") public var api_field : String;

	override public function connect()
	{
		var api = Reflect.field(js.Browser.window, api_field);
		if(null == api)
			Reflect.setField(js.Browser.window, api_field, api = {});
		injector.mapValue(JavaScriptAPI, new JavaScriptAPI(api));
	}
}