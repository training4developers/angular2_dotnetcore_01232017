import { Injectable } from "@angular/core";

@Injectable()
export class ColorsSvc {

    private colors: string[] = ["red", "blue", "yellow", "brown", "black"];

    public getColors() {
        return this.colors.concat();
    }
}
