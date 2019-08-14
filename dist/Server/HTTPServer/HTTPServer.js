"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var HTTPServer = /** @class */ (function () {
    function HTTPServer() {
        this.server = null;
    }
    Object.defineProperty(HTTPServer, "Instance", {
        get: function () {
            if (this.instance == null) {
                this.instance = new HTTPServer();
            }
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    HTTPServer.prototype.Start = function (requestListener, port) {
        this.server = http.createServer(requestListener).listen(port);
        console.log("server start");
    };
    HTTPServer.instance = null;
    return HTTPServer;
}());
exports.HTTPServer = HTTPServer;
//# sourceMappingURL=HTTPServer.js.map