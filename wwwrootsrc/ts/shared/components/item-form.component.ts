import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "item-form",
    template: `<form>
        <label>New Color</label>
        <input type="text" [(ngModel)]="newColor" name="newColorInput">
        <button type="button" (click)="addColor.emit(newColor)">Add Color</button>
    </form>`,
})
export class ItemForm {

    @Output()
    public addColor: EventEmitter<string> = new EventEmitter<string>();

}