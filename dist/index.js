"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPServer_1 = require("./Server/HTTPServer/HTTPServer");
var url = __importStar(require("url"));
var HttpRouter_1 = require("./Logic/HttpRouter");
var RequestHandler_1 = require("./Logic/RequestHandler");
// let http=require('http');
// const server = http.createServer(function (request: http.IncomingMessage, response: http.ServerResponse): void {
// 	console.log("request received!");
// 	response.writeHead(200, { "Content-Type": "text/plain" });
// 	response.write("hello,we use ts to develop");
// 	response.end();
// }).listen(3888, function () {
// 	console.log("server listening on port 3888");
// });
function Start(route, handle) {
    console.log("start!!");
    HTTPServer_1.HTTPServer.Instance.Start(function (request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log("request for " + pathName + " received.");
        // response.writeHead(200, { "Content-Type": "text/plain" });
        route(handle, pathName, response);
        // response.write(content);
        // response.end();
    }, 3888);
}
var httpRouter = new HttpRouter_1.HttpRouter();
var requestHandler = new RequestHandler_1.RequestHandler();
var handle = {};
handle["/"] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;
Start(httpRouter.Route, handle);
// const server =http.createServer(function(request, response) {
// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write("Hello World");
// 	response.end();
//   }).listen(3888);
//# sourceMappingURL=index.js.map