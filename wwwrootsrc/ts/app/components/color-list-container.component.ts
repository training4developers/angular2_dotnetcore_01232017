import { Component, Input } from "@angular/core";

import { ColorsSvc } from "../services/colors-svc";

@Component({
    providers: [ ColorsSvc ],
    selector: "color-list-container",
    template: `<filtered-item-list
        [filterLabel]="filterLabel" [items]="colorsSvc.getColors()"></filtered-item-list>`,
})
export class ColorListContainer {

    @Input()
    public filterLabel: string;

    constructor(private colorsSvc: ColorsSvc) { }


    // private colorsSvc: ColorsSvc;
    // constructor(colorsSvc: ColorsSvc) {
    //     this.colorsSvc = colorsSvc;
    // }    

}