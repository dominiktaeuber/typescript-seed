var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.simpleLog = function (message) {
        console.log(message);
    };
    return Logger;
}());
var logger = new Logger();
logger.simpleLog('Hello World!');
