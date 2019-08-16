import { ServerResponse, IncomingMessage } from "http";

export class HttpRouter {

    public Route(handle: any, pathName: string, request: IncomingMessage, response: ServerResponse) {
        if (typeof handle[pathName] === "function") {
            handle[pathName](request, response);
        }
        else {
            console.log("no rquest handler found for " + pathName);
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.write("404 NOT FOUND");
            response.end();
        }

    }

}