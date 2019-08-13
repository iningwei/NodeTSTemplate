import * as http from "http";
// let http=require('http');
const server = http.createServer(function (request: http.IncomingMessage, response: http.ServerResponse): void {
	console.log("create a server!");
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	response.write('hello,we use ts to develop');
	response.end;
});

server.listen(3000, function () {
	console.log("server listening on port 3000");

});