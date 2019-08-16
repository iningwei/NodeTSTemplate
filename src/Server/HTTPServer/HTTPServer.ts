import * as http from "http";

export class HTTPServer {
    private static instance: HTTPServer | null = null;
    public static get Instance(): HTTPServer {
        if (this.instance == null) {
            this.instance = new HTTPServer();
        }
        return this.instance;
    }

    private server: http.Server | null = null;
    public Start(requestListener: http.RequestListener, port: number): void {        
        this.server = http.createServer(requestListener).listen(port);
        console.log("server start");
    }
}