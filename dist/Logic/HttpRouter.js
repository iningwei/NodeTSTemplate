"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpRouter = /** @class */ (function () {
    function HttpRouter() {
    }
    HttpRouter.prototype.Route = function (handle, pathName, response) {
        if (typeof handle[pathName] === "function") {
            handle[pathName](response);
        }
        else {
            console.log("no rquest handler found for " + pathName);
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.write("404 NOT FOUND");
            response.end();
        }
    };
    return HttpRouter;
}());
exports.HttpRouter = HttpRouter;
//# sourceMappingURL=HttpRouter.js.map