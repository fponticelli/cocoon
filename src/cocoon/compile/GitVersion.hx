package cocoon.compile;

using StringTools;

class GitVersion
{
	public static macro function get()
	{
		var process     = new sys.io.Process('git', ['describe', '--always', '--dirty', '--long', '--tags']),
			description = process.stdout.readAll().toString().trim();
		return macro $v{description};
	}
}