package cocoon.log;

import cocoon.message.LogMessage;

class TraceLogger implements ILogger 
{
	public function new() {}

	public function log(msg : LogMessage)
		haxe.Log.trace(msg.message, msg.pos);
}