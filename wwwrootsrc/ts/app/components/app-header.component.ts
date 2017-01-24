import { Component, Input, DoCheck, ChangeDetectionStrategy } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-header",
    template: `<h1>{{headerMessage}}</h1>
    <my-changedetect-demo someValue={{headerMessage}}></my-changedetect-demo>`,
})
export class AppHeader implements DoCheck {

    @Input("header")
    public readonly headerMessage: string;

    constructor() {
        console.log("app header constructor executed");
    }

    public ngDoCheck() {
        console.log("app header change detection ran");
    }
}
