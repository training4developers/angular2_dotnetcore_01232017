import { Component, ViewEncapsulation } from "@angular/core";

import { Color } from "./models/color";

@Component({
    encapsulation: ViewEncapsulation.Emulated,
    selector: "main",
    styles: [ require("./app.component.scss") ],
    template: require("./app.component.html"),
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

    // callsite this
    get sortedFilteredColors() {

        // sort the colors
        if (this.lastColors !== this.colors) {
            console.log("sorted the colors");
            this.colorsFilterCache.clear();
            this.colors.sort((a, b) => {
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

            // lexical this
            const filteredList = this.colors.filter((color) => {
                return color.code.includes(this.colorCodeFilter);
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




