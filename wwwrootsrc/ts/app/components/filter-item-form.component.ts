import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
    selector: "filter-item-form",
    template: `
        <form>
            <label>{{filterLabel}}</label>
            <input type="text" id="filter-input" name="filterInput"
                [(ngModel)]="filterInput">
            <button (click)="applyFilter(filterInput)">Apply Filter</button>
        </form>
    `
})
export class FilterItemForm {
    public filterInput: string = "";

    @Input()
    public filterLabel: string = "Filter";

    @Output()
    public newFilterValue: EventEmitter<string> = new EventEmitter<string>();

    public applyFilter(filterInputValue: string) {
        this.newFilterValue.emit(filterInputValue);
    }
}