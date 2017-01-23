import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `
        <h1>{{message}}</h1>
        <ul>
            <li *ngFor="let color of colors">{{color.label}} - {{color.code}}</li>
        </ul>
        <form>
            <div>
                <label for="new-color-code-input">New Color Code</label>
                <input type="text" id="new-color-code-input"
                    name="newColorCodeInput"
                    [(ngModel)]="newColor.code">
            </div>
            <div>
                <label for="new-color-label-input">New Color Label</label>
                <input type="text" id="new-color-label-input"
                    name="newColorLabelInput"
                    [(ngModel)]="newColor.label">
            </div>
            <button type="button" (click)="addColor()">Add Color</button>
        </form>
    `,
})
export class AppComponent {
    public message: string = "Hello World!";
    public newColor: any = {
        code: "",
        label: "",
    };

    public colors: any[] = [
        { code: "green", label: "Green" },
        { code: "yellow", label: "Yellow" },
        { code: "red", label: "Red" },
        { code: "gold", label: "Gold" },
        { code: "white", label: "White" },
        { code: "saffron", label: "Saffron" },
        { code: "blue", label: "Blue" },
    ];

    public addColor() {
        this.colors.push(this.newColor);
        this.newColor = {};
    }
}

// <template ngFor let-color [ngForOf]="colors">
//     <li>{{color}}</li>
// </template>
