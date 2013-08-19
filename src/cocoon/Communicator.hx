package cocoon;


import thx.react.Responder;
import thx.react.Provider;
import thx.react.Dispatcher;
import thx.react.ValueDispatcher;
import thx.react.Buffer;

class Communicator
{
	public var provider(default, null)  : Provider;
	public var responder(default, null) : Responder;
	public var event(default, null)     : Dispatcher;
	public var value(default, null)     : ValueDispatcher;
	public var queue(default, null)     : Buffer;
	public function new()
	{
		provider  = new Provider();
		responder = new Responder();
		event     = new Dispatcher();
		value     = new ValueDispatcher();
		queue     = new Buffer();
	}
}