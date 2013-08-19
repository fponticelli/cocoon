package cocoon.log;

import cocoon.message.LogMessage;

interface ILogger 
{
	public function log(msg : LogMessage) : Void;
}