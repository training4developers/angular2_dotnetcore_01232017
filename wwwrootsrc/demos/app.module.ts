import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import "../../scss/styles.scss";

import { AppComponent } from "./app.component";
import { AppHeader } from "./components/app-header.component";
import { MyChangeDetectDemo  } from "./components/my-changedetect-demo.component";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent, AppHeader, MyChangeDetectDemo ],
    imports: [ BrowserModule, FormsModule ],
})
export class AppModule { }
