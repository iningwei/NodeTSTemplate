"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RequestHandler = /** @class */ (function () {
    function RequestHandler() {
    }
    RequestHandler.prototype.start = function (response) {
        console.log("request handler start was called");
        // child_process.exec("ls -lah", function (error, stdout, stderr) {
        //     console.log("你好 call back@@@error:" + error + ", stdout:" + stdout + ", stderr:" + stderr);
        //     response.writeHead(200, { "Content-Type": "text/plain" });
        //     response.write(stdout);
        //     response.end();
        // });
        // child_process.exec("find /", { timeout: 5000, maxBuffer: 1024 * 1000 }, function (error, stdout, stderr) {
        //     console.log("你好 call back@@@error:" + error + ", stdout:" + stdout + ", stderr:" + stderr);
        //     response.writeHead(200, { "Content-Type": "text/plain" });
        //     response.write(stdout);
        //     response.end();
        // })
        var body = '<html>' +
            '<head>' +
            '<meta http-equiv="Content-Type" content="text/html; ' +
            'charset=UTF-8" />' +
            '</head>' +
            '<body>' +
            '<form action="/upload" method="post">' +
            '<textarea name="text" rows="20" cols="60"></textarea>' +
            '<input type="submit" value="Submit text" />' +
            '</form>' +
            '</body>' +
            '</html>';
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(body);
        response.end();
    };
    RequestHandler.prototype.upload = function (response) {
        console.log("request handler upload was called");
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("hello upload");
        response.end();
    };
    return RequestHandler;
}());
exports.RequestHandler = RequestHandler;
//# sourceMappingURL=RequestHandler.js.map