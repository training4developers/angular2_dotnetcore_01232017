import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	template: `<h1 [ngClass]="{ 'critical':isCritical }">{{header}}</h1>`
})
export class AppHeaderComponent {

	@Input()
	header: string = '';

	isCritical: boolean = true;

}

@Component({
	selector: 'li[view-item]',
	template: `<span>{{color}}</span><button (click)="edit.emit(color)">Edit</button>`
})
export class ColorItemComponent {

	@Input()
	color: string = '';

	@Output()
	edit: EventEmitter<string> = new EventEmitter<string>();

}

@Component({
	selector: 'li[edit-item]',
	template: `<input type="text" [(ngModel)]="color"><button (click)="saveColor()">Save</button>`
})
export class EditColorItemComponent implements OnInit {

	originalColor: string = '';

	@Input()
	color: string = '';

	@Output()
	save: EventEmitter<any> = new EventEmitter<any>();

	saveColor() {
		this.save.emit({
			originalColor: this.originalColor,
			newColor: this.color
		});
	}

	ngOnInit() {
		this.originalColor = this.color;
	}

}

@Component({
	selector: 'color-list',
	template: `<div>
		<label for="color-filter">Color Filter:</label>
		<input type="text" id="color-filter" [(ngModel)]="colorFilter">
	</div>
	<ul>
		<template ngFor let-color [ngForOf]="sortedColors">
			<li *ngIf="editColor !== color" view-item [color]="color" (edit)="editColor = $event"></li>
			<li *ngIf="editColor === color" edit-item [color]="color" (save)="saveColor($event)"></li>
		</template>
	</ul>
	<button (click)="addColor.emit()">Add Color</button>`
})
export class ColorListComponent {

	lastColors: string[] = [];
	filteredColors: Map<string, any[]> = new Map<string, any[]>();
	colorFilter: string = '';
	editColor: string = '';

	@Input()
	colors: string[] = [];

	@Output()
	addColor: EventEmitter<void> = new EventEmitter<void>();

	@Output()
	updateColor: EventEmitter<any> = new EventEmitter<any>();


	saveColor(colorObj: any) {

		this.editColor = '';

		this.updateColor.emit(colorObj);

	}

	get sortedColors(): string[] {

		if (this.lastColors !== this.colors) {
			console.log('sorting...');
			this.filteredColors.clear();
			this.lastColors = this.colors.sort();
		}

		if (!this.filteredColors.has(this.colorFilter)) {
			console.log('filtering...');
			this.filteredColors.set(this.colorFilter, this.colors.filter((c) =>
				this.colorFilter.length === 0 ? true : c.startsWith(this.colorFilter)));
		}

		return this.filteredColors.get(this.colorFilter);
	}
}

@Component({
	selector: 'color-form',
	template: `<label for="new-color">New Color</label>
	<input type="text" id="new-color" [(ngModel)]="newColor">
	<br><button type="button" (click)="addColor.emit(newColor)">Add Color</button>`
})
export class ColorFormComponent {

	newColor: string = '';

	@Output()
	addColor: EventEmitter<string> = new EventEmitter<string>();
}

@Component({
	selector: 'main',
	template: `<app-header [header]="mainHeader"></app-header>
	<color-list *ngIf="showList" [colors]="colors" (addColor)="showAddColor($event)" (updateColor)="saveColor($event)"></color-list>
	<color-form *ngIf="!showList" (addColor)="doAddColor($event)"></color-form>`
})
export class AppComponent {

	mainHeader: string = 'List Of Colors';
	showList: boolean = true;

	colors: string[] = [
		'red','blue','white','yellow','saffron','green', 'brown', 'black'
	];

	showAddColor() {
		this.showList = false;
	}

	saveColor(colorObj: any) {

		const colorIndex = this.colors.findIndex(c => c === colorObj.originalColor);

		this.colors = this.colors
			.slice(0, colorIndex)  // get the first part of the array up to but not including the color to replace
			.concat(colorObj.newColor) // new color value replacing the original
			.concat(this.colors.slice(colorIndex+1)); // adding back to remaining part of the original array
	}

	doAddColor(newColor: string) {
		this.colors = this.colors.concat(newColor);
		this.showList = true;
	}
}