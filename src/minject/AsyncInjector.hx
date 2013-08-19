package minject;

import minject.Injector;
import thx.react.Binder;

class AsyncInjector extends Injector
{
	var binder : Binder;
	public function new()
	{
		super();
		binder = new Binder();
	}

	public function getInstanceAsync<T>(theClass : Class<T>, ?named : String, callback : T -> Void)
	{
		if(hasMapping(theClass, named))
		{
			callback(getInstance(theClass, named));
		} else {
			bind(theClass, named, function() {
				callback(getInstance(theClass, named));
			});
		}
	}

	public function instantiateAsync<T>(theClass : Class<T>, callback : T -> Void)
	{
		if(canInstantiate(theClass))
		{
			callback(instantiate(theClass));
		} else {
			bindMany(getInstantiateMissingRequirements(theClass), function() {
				callback(instantiate(theClass));
			});
		}
	}

	public function injectIntoAsync<T>(target : T, callback : T -> Void)
	{
		if(canInjectInto(target))
		{
			injectInto(target);
			callback(target);
		} else {
			bindMany(getInjectIntoMissingRequirements(Type.getClass(target)), function() {
				injectInto(target);
				callback(target);
			});
		}
	}

	public function canInstantiate<T>(theClass:Class<T>) : Bool
	{
		return getInstantiateMissingRequirements(theClass).length == 0;
	}

	public function canInjectInto<T>(target : T) : Bool
	{
		return getInjectIntoMissingRequirements(Type.getClass(target)).length == 0;
	}

	public function getInstantiateMissingRequirements<T>(theClass:Class<T>) : Array<TypePair>
	{
		return getInstantiateRequirements(theClass).filter(function(pair) {
			return !hasMapping(pair.type, pair.name);
		});
	}

	public function getInjectIntoMissingRequirements<T>(theClass:Class<T>) : Array<TypePair>
	{
		return getInjectIntoRequirements(theClass).filter(function(pair) {
			return !hasMapping(pair.type, pair.name);
		});
	}

	@:access(minject.point.MethodInjectionPoint)
	public function getInstantiateRequirements<T>(theClass:Class<T>) : Array<TypePair>
	{
		var injecteeDescription:InjecteeDescription;
		if (injecteeDescriptions.exists(theClass))
			injecteeDescription = injecteeDescriptions.get(theClass);
		else
			injecteeDescription = getInjectionPoints(theClass);
		var requirements = 
				Std.is(injecteeDescription.ctor, minject.point.NoParamsConstructorInjectionPoint)
				? []
				: cast(injecteeDescription.ctor, minject.point.MethodInjectionPoint)._parameterInjectionConfigs.map(function(info) {
					return {
						type : Type.resolveClass(info.typeName),
						name : info.injectionName
					};
				});
		return requirements.concat(getInjectIntoRequirements(theClass));
	}
	
	@:access(minject.point.PropertyInjectionPoint)
	public function getInjectIntoRequirements<T>(targetClass:Class<T>) : Array<TypePair>
	{
		var injecteeDescription:InjecteeDescription = null;

		if (injecteeDescriptions.exists(targetClass))
			injecteeDescription = injecteeDescriptions.get(targetClass);
		else
			injecteeDescription = getInjectionPoints(targetClass);

		if (injecteeDescription == null)
			return [];

		return injecteeDescription.injectionPoints.map(function(point) {
			var info = cast(point, minject.point.PropertyInjectionPoint);
			return {
				type : Type.resolveClass(info.propertyType),
				name : info.injectionName
			};
		});
	}

	function bindMany(pairs : Array<TypePair>, handler : Void -> Void)
	{
		var counter = pairs.length;
		pairs.map(function(pair) {
			bind(pair.type, pair.name, function() {
				if(0 == --counter)
					handler();
			});
		});
	}

	function bind<T>(type : Class<T>, ?named : String, handler : Void -> Void)
	{
		binder.bindOne(getKey(type, named), handler);
	}

	function getKey(type : Class<Dynamic>, ?named : String)
	{
		return (named == null ? "" : named) + Type.getClassName(type);
	}

	override public function mapValue(whenAskedFor:Class<Dynamic>, useValue:Dynamic, ?named:String = ""):Dynamic
	{
		var config = super.mapValue(whenAskedFor, useValue, named);
		binder.dispatch(getKey(whenAskedFor, named), []);
		return config;
	}

	override public function mapClass(whenAskedFor:Class<Dynamic>, instantiateClass:Class<Dynamic>, ?named:String=""):Dynamic
	{
		var config = super.mapClass(whenAskedFor, instantiateClass, named);
		binder.dispatch(getKey(whenAskedFor, named), []);
		return config;
	}
	
	override public function mapSingletonOf(whenAskedFor:Class<Dynamic>, useSingletonOf:Class<Dynamic>, ?named:String=""):Dynamic
	{
		var config = super.mapSingletonOf(whenAskedFor, useSingletonOf, named);
		binder.dispatch(getKey(whenAskedFor, named), []);
		return config;
	}
	
	override public function mapRule(whenAskedFor:Class<Dynamic>, useRule:Dynamic, ?named:String = ""):Dynamic
	{
		var config = super.mapRule(whenAskedFor, useRule, named);
		binder.dispatch(getKey(whenAskedFor, named), []);
		return config;
	}
}

private typedef TypePair = {
	type : Class<Dynamic>,
	name : Null<String >
}