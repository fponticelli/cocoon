package cocoon.log;

import cocoon.message.LogMessage;

class ConsoleLogger implements ILogger 
{
	static var api : {
			error : Dynamic -> Void,
			debug : Dynamic -> Void,
			info : Dynamic -> Void,
			log : Dynamic -> Void,
			warn : Dynamic -> Void
		} = untyped __js__("console ||  { warn : function(){}, info : function(){}, log : function(){}, error : function(){}, debug : function(){} }");
	public function new() {}

	public function log(msg : LogMessage)
	{
		var f = function(t) {
			switch(msg.type) {
				case Debug: api.debug(t);
				case Error: api.error(t);
				case Info: api.info(t);
				case Log: api.log(t);
				case Warning: api.warn(t);
			};
		};
		var pos = null == msg.pos ? '' : '${msg.pos.lineNumber}:${msg.pos.className}.${msg.pos.methodName}() ',
			time = formatTime(msg.time);
		f('$pos[$time]\n${msg.message}');
	}

	static function formatTime(date : Date)
	{
		function pad(i : Int)
			return i < 10 ? "0" + i : "" + i;
		return pad(date.getHours()) + ":" + pad(date.getMinutes()) + ":" + pad(date.getSeconds());
	}
}