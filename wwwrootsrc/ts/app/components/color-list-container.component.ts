import { Component, Input, OnInit } from "@angular/core";

import { ColorsSvc } from "../services/colors-svc";

@Component({
    providers: [ ColorsSvc ],
    selector: "color-list-container",
    template: `<filtered-item-list
        [filterLabel]="filterLabel" [items]="colors"></filtered-item-list>`,
})
export class ColorListContainer implements OnInit {

    @Input()
    public filterLabel: string;

    public colors: string[];

    constructor(private colorsSvc: ColorsSvc) { }

    public ngOnInit() {
        this.colors = this.colorsSvc.getColors();

        setTimeout(() => {
            console.log("timeout expired");
            //this.colors.push("pink");
            this.colors = this.colors.concat("pink");
        }, 0);
    }
}