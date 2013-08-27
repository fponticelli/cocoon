package cocoon.util;

using thx.react.promise.Http;
using thx.react.Promise;
import haxe.Json;

class Assets
{
	public static function json(path : String) : Promise<Dynamic -> Void>
	{
		return new Http(path).request().pipe(function(s : String) {
			return Promise.value(Json.parse(s));
		});
	}
}