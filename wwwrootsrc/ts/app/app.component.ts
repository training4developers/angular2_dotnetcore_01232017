import { Component } from "@angular/core";

import { Color } from "./models/color";

@Component({
    selector: "main",
    template: `
        <h1>{{message}}</h1>
        <ul>
            <li *ngFor="let color of sortedColors">
                {{color.label}} - {{color.code}}
            </li>
        </ul>
        <form>
            <div>
                <label for="new-color-code-input">New Color Code</label>
                <input type="text" id="new-color-code-input"
                    name="newColorCodeInput"
                    [(ngModel)]="newColor.code">
            </div>
            <div>
                <label for="new-color-label-input">New Color Label</label>
                <input type="text" id="new-color-label-input"
                    name="newColorLabelInput"
                    [(ngModel)]="newColor.label">
            </div>
            <button type="button" (click)="addColor()">Add Color</button>
        </form>
    `,
})
export class AppComponent {

    public message: string = "Hello World!";
    public newColor: Color = new Color();
    public lastColors: Color[];
    public colors: Color[] = [];

    constructor() {
        const newColor = new Color();
        newColor.code = "red";
        newColor.label = "Red";
        this.colors.push(newColor);
    }

    get sortedColors() {

        if (this.lastColors !== this.colors) {
            console.log("sorted the colors");
            this.colors.sort(function(a, b) {
                if (a.code === b.code) {
                    return 0;
                }
                return a.code < b.code ? -1 : 1;
            });
            this.lastColors = this.colors;
        }

        return this.colors;
    }

    public addColor() {
        this.colors = this.colors.concat(this.newColor);
        this.newColor = new Color();
    }
}

// <template ngFor let-color [ngForOf]="colors">
//     <li>{{color}}</li>
// </template>
