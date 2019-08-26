import { HTTPServer } from "./Server/HTTPServer/HTTPServer";
import * as url from "url";
import { HttpRouter } from "./Logic/HttpRouter";
import { RequestHandler } from "./Logic/RequestHandler";








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
import * as WebSocket from "ws";

const wss = new WebSocket.Server({ port: 8083 });
wss.on("connection", function connection(ws) {
	ws.on("message", function incoming(message) {
		console.log("received:%s", message);
	});
	ws.send("hhhello");
});


