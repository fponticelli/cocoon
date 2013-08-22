package cocoon.module;

import thx.react.Promise;
import cocoon.message.LogMessage;
import thx.react.Buffer;

class JavaScriptErrorInterceptModule extends Module
{
	override function connect()
	{
		js.Browser.window.onerror = cast function(msg : String, url : String, line : String) {
			var message = '$msg <small>(line $line) at $url</small>';
			communicator.queue.enqueue(new LogMessage(message, Error));
		};
	}
}