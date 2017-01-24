import { Component, Input, DoCheck } from "@angular/core";

@Component({
    selector: "my-changedetect-demo",
    template: `<h2>{{someValue}}</h2>`,
})
export class MyChangeDetectDemo implements DoCheck {

    @Input()
    public readonly someValue: string;

    constructor() {
        console.log("my-changedetect-demo constructor executed");
    }

    public ngDoCheck() {
        console.log("my-changedetect-demo change detection ran");
    }
}
