import { HTTPServer } from "./Server/HTTPServer/HTTPServer";
import * as url from "url";
import { HttpRouter } from "./Logic/HttpRouter";
import { RequestHandler } from "./Logic/RequestHandler";


// let http=require('http');

// const server = http.createServer(function (request: http.IncomingMessage, response: http.ServerResponse): void {
// 	console.log("request received!");
// 	response.writeHead(200, { "Content-Type": "text/plain" });
// 	response.write("hello,we use ts to develop");
// 	response.end();
// }).listen(3888, function () {
// 	console.log("server listening on port 3888");
// });





function Start(route: (handle, name,response) => void, handle: any) {
	console.log("start!!");

	HTTPServer.Instance.Start((request, response) => {
		var pathName = url.parse(request.url).pathname;
		console.log("request for " + pathName + " received.");
		// response.writeHead(200, { "Content-Type": "text/plain" });
	    route(handle, pathName,response);
		// response.write(content);
		// response.end();
	}, 3888);
}

let httpRouter: HttpRouter = new HttpRouter();
let requestHandler: RequestHandler = new RequestHandler();
let handle = {};
handle["/"] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;

Start(httpRouter.Route, handle);

// const server =http.createServer(function(request, response) {
// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write("Hello World");
// 	response.end();
//   }).listen(3888);