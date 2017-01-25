import { Component, Input } from "@angular/core";

@Component({
    selector: "list-tool",
    template: `
        <h1>{{headerText}}</h1>
        <ng-content></ng-content>
    `,
})
export class ListTool {

    @Input("header")
    public headerText: string;

}