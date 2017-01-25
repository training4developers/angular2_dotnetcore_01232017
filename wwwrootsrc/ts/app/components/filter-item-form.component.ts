import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "filter-item-form",
    template: `
        <form>
            <label>Filter</label>
            <input type="text" id="filter-input" name="filterInput"
                [(ngModel)]="filterInput">
            <button (click)="applyFilter(filterInput)">Apply Filter</button>
        </form>
    `
})
export class FilterItemForm {
    public filterInput: string = "";

    @Output()
    public newFilterValue: EventEmitter<string> = new EventEmitter<string>();

    public applyFilter(filterInputValue: string) {
        this.newFilterValue.emit(filterInputValue);
    }
}