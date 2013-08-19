package cocoon;

class ModulesChange
{
	public var modules(get, null) : Modules;
	var feeder : Void -> Modules;
	public function new(feeder : Void -> Modules)
		this.feeder = (function() {
			var values = null;
			return function() {
				if(null == values)
					values = feeder();
				return values;
			};
		})();

	function get_modules()
		return feeder();

	public function toString()
	{
		return modules.length == 0
			? "no registered modules"
			: modules.map(function(module) {
				return Type.getClassName(module.type) + ' (${null == module.instance ? "not " : ""}instantiated)';
			}).join(",\n");
	}
}

typedef Modules = Array<{ type : Class<Module>, instance : Null<Module> }>;