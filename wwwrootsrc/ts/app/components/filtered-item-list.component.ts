import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "filtered-item-list",
    template: `
        <filter-item-form [filterLabel]="filterLabel"
            (newFilterValue)="receivedNewFilterValue($event)">
        </filter-item-form>
        <item-list [items]="items"></item-list>
    `,
})
export class FilteredItemList implements OnInit {

    @Input()
    public items: string[] = [];

    @Input()
    public filterLabel: string;
    public filteredItems: string[] = [];

    public receivedNewFilterValue(filterValue: string) {
        this.filteredItems = this.items.filter((item: string) =>
            item.includes(filterValue));
    }

    public ngOnInit() {
        this.filteredItems = this.items;
    }

}