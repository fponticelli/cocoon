package cocoon.util;

import haxe.Json;

import jQuery.*;

using thx.react.Promise;

class Request
{
	public static function request<T>(url : String, ?options : RequestOptions) : Promise<T -> Void>
	{
		var deferred = new Deferred<T>();
		JQueryStatic.ajax(url, options)
			.then(
				deferred.resolve,
				deferred.reject
			)
		;

		return deferred.promise;
	}

	public static function get<T>(url, ?options : RequestOptions) : Promise<T -> Void>
	{
		if(null == options)
			options = {};
		options.type = "GET";
		return request(url, options);
	}

	public static function post<T>(url, ?options : RequestOptions) : Promise<T -> Void>
	{
		if(null == options)
			options = {};
		options.type = "POST";
		return request(url, options);
	}

	public static function put<T>(url, ?options : RequestOptions) : Promise<T -> Void>
	{
		if(null == options)
			options = {};
		options.type = "PUT";
		return request(url, options);
	}

	public static function delete<T>(url, ?options : RequestOptions) : Promise<T -> Void>
	{
		if(null == options)
			options = {};
		options.type = "DELETE";
		return request(url, options);
	}

	public static function setJsonPayload(payload : Dynamic, ?options : RequestOptions)
	{
		if(null == options)
			options = {};
		options.data = Json.stringify(payload);
		options.contentType = "application/json";
		return options;
	}
}

typedef RequestOptions = {
	?accepts : Dynamic,
	?async : Bool,
	?beforeSend : JqXHR -> Dynamic -> Bool,
	?cache : Bool,
	?complete : JqXHR -> String -> Void,
	?contents : Dynamic,
	?contentType : String,
	?context : Dynamic,
	?converters : Dynamic,
	?crossDomain : Bool,
	?data : Dynamic,
	?dataFilter : String -> String -> Dynamic,
	?dataType : String,
	?error : JqXHR -> String -> String,
	?global : Bool,
	?headers : Dynamic<String>,
	?ifModified : Bool,
	?isLocal : Bool,
	?jsonp : String,
	?jsonpCallback : Dynamic,
	?mimeType : String,
	?password : String,
	?processData : Bool,
	?scriptCharset : String,
	?statusCode : Dynamic,
	?success : Dynamic -> String -> JqXHR -> Void,
	?timeout : Int,
	?traditional : Bool,
	?type : String,
	?url : String,
	?username : String,
	?xhr : Void -> js.html.XMLHttpRequest,
	?xhrFields : Dynamic
};