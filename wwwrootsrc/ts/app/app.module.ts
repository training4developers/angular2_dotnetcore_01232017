import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import "../../scss/styles.scss";

import { AppComponent } from "./app.component";
import { AppHeader } from "./components/app-header.component";
import { ItemList  } from "./components/item-list.component";
import { FilteredItemList } from "./components/filtered-item-list.component";
import { FilterItemForm } from "./components/filter-item-form.component";
import { ColorListContainer } from "./components/color-list-container.component";
import { ListTool } from "./components/list-tool.component";

import { MyUpperCasePipe } from "./pipes/my-uppercase.pipe";
import { MyLengthPipe } from "./pipes/my-length.pipe";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent, AppHeader, ItemList,
        FilteredItemList, FilterItemForm,
        ColorListContainer, ListTool, MyUpperCasePipe,
        MyLengthPipe,
    ],
    imports: [ BrowserModule, FormsModule ],
})
export class AppModule { }
