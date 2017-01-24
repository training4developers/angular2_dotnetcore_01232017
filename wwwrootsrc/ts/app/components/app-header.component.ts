import { Component, Input, DoCheck, ChangeDetectionStrategy } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-header",
    template: `<h1>{{headerMessage}}</h1>`,
})
export class AppHeader implements DoCheck {

    @Input("header")
    public readonly headerMessage: string;

    constructor() {
        console.log("app header constructor executed");
    }

    public ngDoCheck() {
        console.log("change detection ran");
    }
}
