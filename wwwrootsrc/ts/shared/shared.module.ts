import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ItemList } from "./components/item-list.component";
import { ItemForm } from "./components/item-form.component";

import { AppStore } from "./services/app-store";

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ ItemList, ItemForm ],
    exports: [ ItemList, ItemForm ],
    providers: [ AppStore ],
})
export class SharedModule { }