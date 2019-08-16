import { HTTPServer } from "./Server/HTTPServer/HTTPServer";
import * as url from "url";
import { HttpRouter } from "./Logic/HttpRouter";
import { RequestHandler } from "./Logic/RequestHandler";
 
// const server = http.createServer(function (request: http.IncomingMessage, response: http.ServerResponse): void {
// 	console.log("request received!");
// 	response.writeHead(200, { "Content-Type": "text/plain" });
// 	response.write("hello,we use ts to develop");
// 	response.end();
// }).listen(3888, function () {
// 	console.log("server listening on port 3888");
// });






function Start(route: (handle, name, response, postData) => void, handle: any, port: number) {
	console.log("start!!");

	HTTPServer.Instance.Start((request, response) => {
		var pathName = url.parse(request.url).pathname;
		console.log("request for " + pathName + " received.");
		route(handle, pathName, request, response);
	}, port);
}

let httpRouter: HttpRouter = new HttpRouter();
let requestHandler: RequestHandler = new RequestHandler();
let handle = {};
handle["/"] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/uploadTxt"] = requestHandler.uploadTxt;
handle["/uploadPic"] = requestHandler.uploadPic;
handle["/showPic"] = requestHandler.showPic;

Start(httpRouter.Route, handle, 3888);
