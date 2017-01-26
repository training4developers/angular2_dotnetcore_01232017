import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import "../../scss/styles.scss";

import { AppComponent, MyUpperCasePipe } from "./app.component";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent, MyUpperCasePipe ],
    imports: [ BrowserModule, FormsModule ],
})
export class AppModule { }
