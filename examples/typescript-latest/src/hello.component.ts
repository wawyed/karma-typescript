import { MhrWindowService } from "@mhrwebux/common";
import "reflect-metadata";
import { HelloService } from "./hello-service.interface";

require("es6-object-assign").polyfill();

export class HelloComponent {

    constructor(private helloService: HelloService) {
    }

    public sayHello(): string {

        let configureTransform = require("karma-typescript-es6-transform");
        let transform = configureTransform();
        transform.initialize({
            appenders: [],
            level: "INFO"
        });

        let mhrAction = new MhrWindowService();

        return this.helloService.sayHello();
    }
}
