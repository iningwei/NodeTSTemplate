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
// let http=require('http');
var server = http.createServer(function (request, response) {
    console.log("create a server!");
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('hello,we use ts to develop');
    response.end;
});
server.listen(3000, function () {
    console.log("server listening on port 3000");
});
