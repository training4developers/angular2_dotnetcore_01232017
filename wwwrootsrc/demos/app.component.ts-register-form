import { Component, Directive, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Directive({
	selector: '[registerForm]'
})
export class RegisterFormModelDirective implements OnInit, OnDestroy {

	@Input('registerForm')
	form: NgForm;
	
	@Input('registerModel')
	model: NgModel;

	ngOnInit() {
		if (this.form && this.model) {
			this.form.addControl(this.model);
		}
	}

	ngOnDestroy() {
		if (this.form && this.model) {
			this.form.removeControl(this.model);
		}
	}
}

@Component({
	selector: 'edit-row',
	template: `<input type="text" id="message" name="message" [(ngModel)]="message"
		#messageNgModel="ngModel" required [registerForm]="editNgForm" [registerModel]="messageNgModel">
	<button (click)="saveRow.emit(message)">Save</button>`
})
export class EditRowComponent {

	@Input()
	editNgForm: NgForm;

	@Output()
	saveRow: EventEmitter<string> = new EventEmitter<string>();
}

@Component({
	selector: 'main',
	template: `<form novalidate #editNgForm="ngForm">
		<input type="checkbox" name="showMe" [(ngModel)]="showMe">
		<div *ngIf="showMe">
			<edit-row [editNgForm]="editNgForm" (saveRow)="saveRow($event)"></edit-row>
		</div>
	</form>`
})
export class AppComponent {

	saveRow(row: any) {
		console.log(row);
	}
}