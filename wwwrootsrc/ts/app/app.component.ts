import { Component } from "@angular/core";

import { Color } from "./models/color";

@Component({
    selector: "main",
    template: `
        <h1>{{message}}</h1>
        <ul>
            <li *ngFor="let color of colors">
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
    public colors: Color[] = [];

    constructor() {
        const newColor = new Color();
        newColor.code = "red";
        newColor.label = "Red";
        this.colors.push(newColor);
    }

    public addColor() {
        this.colors.push(this.newColor);
        this.newColor = new Color();
    }
}

// <template ngFor let-color [ngForOf]="colors">
//     <li>{{color}}</li>
// </template>
