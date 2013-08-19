package cocoon.module;

import cocoon.message.LogMessage;
import cocoon.Module;
import thx.translation.Translation;

class LocalizationAdvisorModule extends Module
{
	@inject public var translation : Translation;
    override public function connect()
    {
		translation.missingKeyCallback = function(domain, key) {
			if(domain == "en-US" || cache.exists(key))
				return;
			cache.set(key, true);
			communicator.queue.queue(new LogMessage('missing translation "$key" ($domain)', Info));
		};
    }
}