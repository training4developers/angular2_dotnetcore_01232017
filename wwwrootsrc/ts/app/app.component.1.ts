import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

const myRequired = (control: FormControl) => {

    if (control.value == null || String(control.value) === "") {
        return {
            myRequired: false,
        };
    }

    return null;

};


interface ControlInfo {
    type: string;
    name: string;
    id: string;
    initialValue: string;
    label: string;
}

@Component({
    selector: "main",
    template: `<form [formGroup]="personFormGroup">

        <div>
            <div>Valid: {{personFormGroup.valid}}</div>
            <div>Dirty: {{personFormGroup.dirty}}</div>
            <div>Data: {{personFormGroup.value | json}}</div>
        </div>

        <div *ngFor="let controlInfo of controls">
            <label [for]="controlInfo.id">{{controlInfo.label}}</label>
            <input [type]="controlInfo.type" [id]="controlInfo.id" [formControlName]="controlInfo.name">
        </div>

        <button type="button" (click)="save()">Save</button>

    </form>`,
})
export class AppComponent implements OnInit {

    private personFormGroup: FormGroup;
    private controls: ControlInfo[] = [];

    public ngOnInit() {

        this.controls.push({
            type: "text",
            name: "firstName",
            id: "first-name-input",
            initialValue: "",
            label: "First Name:",
        });

        this.controls.push({
            type: "text",
            name: "lastName",
            id: "last-name-input",
            initialValue: "",
            label: "Last Name:",
        });

        const formControls = {};

        this.controls.forEach((controlInfo) => {
            formControls[controlInfo.name] = new FormControl(controlInfo.initialValue, [myRequired]);
        });

        this.personFormGroup = new FormGroup(formControls);

    }

    public save() {
        ///console.log(this.personFormGroup.value);

        this.controls.push({
            type: "number",
            name: "age",
            id: "age-input",
            initialValue: "",
            label: "Age:",
        });

        this.personFormGroup.setControl("age", new FormControl(""));
    }

}
