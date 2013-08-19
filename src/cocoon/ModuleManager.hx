package cocoon;

import minject.AsyncInjector;
using thx.core.Iterators;

class ModuleManager 
{
	public var communicator(default, null) : Communicator;
	public var injector(default, null) : AsyncInjector;
	var modules : Map<String, Module>;
	public function new()
	{
		modules      = new Map();
		injector     = new AsyncInjector();
		communicator = new Communicator();

		injector.mapValue(AsyncInjector, injector);
		injector.mapValue(Communicator, communicator);
		injector.mapValue(ModuleManager, this);
	}

	public function getModules()
	{
		return modules.keys().map(function(type : String) {
			var t : Class<Module> = cast Type.resolveClass(type);
			return {
				type     : t,
				instance : modules.get(type)
			};
		});
	}

	public function register(moduleClass : Class<Module>)
	{
		if(modules.exists(Type.getClassName(moduleClass)))
			throw "module already registered";
		modules.set(Type.getClassName(moduleClass), null);
		injector.instantiateAsync(moduleClass, addModule);
		return this;
	}

	public function unregister(moduleClass : Class<Module>)
	{
		if(!modules.exists(Type.getClassName(moduleClass)))
			throw "module is not registered";
		var module = modules.get(Type.getClassName(moduleClass));
		if(null == module)
			modules.remove(Type.getClassName(moduleClass));
		else
			removeModule(module);
		return this;
	}

	function addModule(module : Module)
	{
		modules.set(Type.getClassName(Type.getClass(module)), module);
		module.connect();
		communicator.event.trigger(new ModulesChange(getModules));
	}

	function removeModule(module : Module)
	{
		if(modules.remove(Type.getClassName(Type.getClass(module))))
		{
			module.disconnect();
			communicator.event.trigger(new ModulesChange(getModules));
		}
	}
}