import { Component, ViewEncapsulation } from "@angular/core";

import { Color } from "./models/color";

@Component({
    selector: "main",
    template: `
        <h1>{{message}}</h1>
        <form>
            <div>
                <label for="color-code-filter">Color Code Filter</label>
                <input type="text" id="color-code-filter" name="colorCodeFilter"
                    [(ngModel)]="colorCodeFilter">
            </div>
        </form>
        <ul>
            <li *ngFor="let color of sortedFilteredColors">
                {{color.label}} - {{color.code}}
            </li>
        </ul>
        <form>
            <div>
                <label for="new-color-code-input">New Color Code</label>
                <input type="text" id="new-color-code-input" name="newColorCodeInput"
                    [(ngModel)]="newColor.code">
            </div>
            <div>
                <label for="new-color-label-input">New Color Label</label>
                <input type="text" id="new-color-label-input" name="newColorLabelInput"
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
    public colorsFilterCache: Map<string, Color[]> = new Map<string, Color[]>();
    public colorCodeFilter: string = "";

    constructor() {
        const newColor = new Color();
        newColor.code = "red";
        newColor.label = "Red";
        this.colors.push(newColor);
    }

    get sortedFilteredColors() {

        // sort the colors
        if (this.lastColors !== this.colors) {
            console.log("sorted the colors");
            this.colorsFilterCache.clear();
            this.colors.sort(function(a, b) {
                if (a.code === b.code) {
                    return 0;
                }
                return a.code < b.code ? -1 : 1;
            });
            this.lastColors = this.colors;
        }

        // filtering colors
        if (this.colorCodeFilter) {


            if (this.colorsFilterCache.has(this.colorCodeFilter)) {
                return this.colorsFilterCache.get(this.colorCodeFilter);
            }

            console.log("ran filter");

            var that = this;

            const filteredList = this.colors.filter(function(color) {
                return color.code.includes(that.colorCodeFilter);
            });

            this.colorsFilterCache.set(this.colorCodeFilter, filteredList);

            return filteredList;


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


// const states = new Map<string, string>();

// states.set("VA", "Virginia");
// states.set("CA", "California");
// states.set("DC", "District of Columbia");

// console.log(states.get("CA"));
// console.log(states.has("CA"));
// console.log(states.size);

// states.clear();
// console.log(states.size);




