import { ServerResponse, IncomingMessage } from "http";
import * as child_process from "child_process";
import * as querystring from "querystring";
import * as fs from "fs";
import * as formidable from "formidable";

export class RequestHandler {
    public start(request: IncomingMessage, response: ServerResponse) {
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
    }
    public uploadTxt(request: IncomingMessage, response: ServerResponse) {
        console.log("request handler uploadTxt() was called");

        let form = new formidable.IncomingForm();
        form.parse(request, function (err, fields, files) {
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.write("you have sent the text:" + fields.text);
            response.end();
        });
    }

    public uploadPic(request: IncomingMessage, response: ServerResponse) {
        console.log("request handler uploadPic() was called");

        let form = new formidable.IncomingForm();
        form.uploadDir = "./tmp";//必须设置保存地址，否则无法保存
        form.keepExtensions = true;//上传的文件默认会变成一个随机命名的不带扩展名的文件，故需要设置保持扩展名
        form.parse(request, function (error, fields, files) {

            fs.renameSync(files.upload.path, "tmp/test.png");
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write("received image:<br/>");
            response.write("<image src='/showPic' />");
            response.end();
        });
    }

    public showPic(request: IncomingMessage, response: ServerResponse) {
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
    }
}
