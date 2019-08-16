"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var formidable = __importStar(require("formidable"));
var RequestHandler = /** @class */ (function () {
    function RequestHandler() {
    }
    RequestHandler.prototype.start = function (request, response) {
        console.log("request handler start() was called");
        // child_process.exec("ls -lah", function (error, stdout, stderr) {
        //     console.log("你好 call back@@@error:" + error + ", stdout:" + stdout + ", stderr:" + stderr);
        //     response.writeHead(200, { "Content-Type": "text/plain" });
        //     response.write(stdout);
        //     response.end();
        // });
        // child_process.exec("find /",
        //     { timeout: 10000, maxBuffer: 20000 * 1024 },
        //     function (error, stdout, stderr) {
        //         console.log("你好 call back@@@error:" + error + ", stdout:" + stdout + ", stderr:" + stderr);
        //         response.writeHead(200, { "Content-Type": "text/plain" });
        //         response.write(stdout);
        //         response.end();
        //     });
        var body = '<html>' +
            '<head>' +
            '<meta http-equiv="Content-Type" content="text/html; ' +
            'charset=UTF-8" />' +
            '</head>' +
            '<body>' +
            '<form action="/uploadTxt" method="post">' +
            '<textarea name="text" rows="20" cols="60"></textarea>' +
            '<input type="submit" value="Submit text" />' +
            '</form>' +
            '<form action="/uploadPic" enctype="multipart/form-data" ' +
            'method="post">' +
            '<input type="file" name="upload">' +
            '<input type="submit" value="Upload file" />' +
            '</form>' +
            '</body>' +
            '</html>';
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(body);
        response.end();
    };
    RequestHandler.prototype.uploadTxt = function (request, response) {
        console.log("request handler uploadTxt() was called");
        var form = new formidable.IncomingForm();
        form.parse(request, function (err, fields, files) {
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.write("you have sent the text:" + fields.text);
            response.end();
        });
    };
    RequestHandler.prototype.uploadPic = function (request, response) {
        console.log("request handler uploadPic() was called");
        var form = new formidable.IncomingForm();
        form.uploadDir = "./tmp";
        form.keepExtensions = true;
        form.parse(request, function (error, fields, files) {
            fs.renameSync(files.upload.path, "tmp/test.png");
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write("received image:<br/>");
            response.write("<image src='/showPic' />");
            response.end();
        });
    };
    RequestHandler.prototype.showPic = function (request, response) {
        console.log("request handler showpic() was called");
        fs.readFile("./tmp/test.png", "binary", function (error, file) {
            if (error) {
                response.writeHead(500, { "Content-Type": "text/plain" });
                response.write(error + "\n");
                response.end();
            }
            else {
                response.writeHead(200, { "Content-Type": "image/png" });
                response.write(file, "binary");
                response.end();
            }
        });
    };
    return RequestHandler;
}());
exports.RequestHandler = RequestHandler;
//# sourceMappingURL=RequestHandler.js.map