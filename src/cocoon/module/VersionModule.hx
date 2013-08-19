package cocoon.module;

import cocoon.message.ApplicationVersion;
import cocoon.message.JavaScriptAPI;
import cocoon.Module;

class VersionModule extends Module
{
	override public function connect()
	{
		var version = cocoon.compile.GitVersion.get();
		injector.mapValue(ApplicationVersion, new ApplicationVersion(version));
		injector.getInstanceAsync(JavaScriptAPI, function(jsapi : JavaScriptAPI) {
			jsapi.api.version = version;
		});
	}
}