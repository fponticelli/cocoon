package cocoon.module;

import cocoon.Module;
import cocoon.log.ILogger;
import cocoon.message.LogMessage;

class LogModule extends Module
{
	@inject public var logger : ILogger;
    override public function connect()
        communicator.queue.process(logger.log);
}