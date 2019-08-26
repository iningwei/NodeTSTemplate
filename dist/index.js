"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// function Start(route: (handle, name, response, postData) => void, handle: any, port: number) {
// 	console.log("start!!");
// 	HTTPServer.Instance.Start((request, response) => {
// 		var pathName = url.parse(request.url).pathname;
// 		console.log("request for " + pathName + " received.");
// 		route(handle, pathName, request, response);
// 	}, port);
// }
// let httpRouter: HttpRouter = new HttpRouter();
// let requestHandler: RequestHandler = new RequestHandler();
// let handle = {};
// handle["/"] = requestHandler.start;
// handle["/start"] = requestHandler.start;
// handle["/uploadTxt"] = requestHandler.uploadTxt;
// handle["/uploadPic"] = requestHandler.uploadPic;
// handle["/showPic"] = requestHandler.showPic;
// Start(httpRouter.Route, handle, 3888);
// 测试websocket
var WebSocket = __importStar(require("ws"));
var wss = new WebSocket.Server({ port: 3333 });
wss.on("connection", function connection(ws) {
    ws.on("message", function incoming(message) {
        console.log("received:%s", message);
    });
    ws.send("hhhello");
});
//# sourceMappingURL=index.js.map