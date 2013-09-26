package cocoon;

import minject.AsyncInjector;

class Module
{
	@inject public var communicator : Communicator;
	@inject public var injector : AsyncInjector;

	public function new() {}

	public function getName() return Type.getClassName(Type.getClass(this));

	public function connect() {}

	public function disconnect() {}
}