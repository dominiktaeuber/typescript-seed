class Logger {

	public simpleLog(message: string) {
		console.log(message);
	}
}

let logger: Logger = new Logger();

logger.simpleLog('Hello World!');
