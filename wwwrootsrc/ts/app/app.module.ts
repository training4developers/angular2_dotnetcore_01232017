import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { SharedModule } from "../shared/shared.module";

import "../../scss/styles.scss";

import { AppComponent } from "./app.component";
import { AppHeader } from "./components/app-header.component";
import { FilteredItemList } from "./components/filtered-item-list.component";
import { FilterItemForm } from "./components/filter-item-form.component";
import { ColorListContainer } from "./components/color-list-container.component";
import { ListTool } from "./components/list-tool.component";

import { MyUpperCasePipe } from "./pipes/my-uppercase.pipe";
import { MyLengthPipe } from "./pipes/my-length.pipe";



@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        AppHeader, FilteredItemList, FilterItemForm,
        ColorListContainer, ListTool, MyUpperCasePipe, MyLengthPipe,
    ],
    imports: [ BrowserModule, FormsModule, HttpModule, ReactiveFormsModule, SharedModule ],
})
export class AppModule { }
