package cocoon.message;

import haxe.PosInfos;

class LogMessage
{
	public var message(default, null) : String;
	public var type(default, null) : LogType;
	public var time(default, null) : Date;
	public var pos(default, null) : PosInfos;
	public var data(default, null) : Dynamic;
	public function new(message : String, ?type : LogType, ?data : Dynamic, ?pos : PosInfos)
	{
		this.message = message;
		this.type = null == type ? Error : type;
		this.time = Date.now();
		this.data = data;
		this.pos  = pos;
	}

	public function toString()
		return '$type: ${message.toString()} ($time)';
}

enum LogType
{
	Debug;
	Error;
	Info;
	Log;
	Warning;
}