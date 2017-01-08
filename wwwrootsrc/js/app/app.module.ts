import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from '../utils/utils.module';
import { HttpModule } from '@angular/http';

import '../../css/styles.scss';

import { AppComponent, Cars } from './app.component';

@NgModule({
	imports: [ BrowserModule, FormsModule, UtilsModule, HttpModule ],
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ],
	providers: [ Cars ]
})
export class AppModule { }
