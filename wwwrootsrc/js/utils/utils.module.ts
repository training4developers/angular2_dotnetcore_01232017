import { NgModule } from '@angular/core';

import { JsLoggerPipe } from './pipes/js-logger.pipe';

@NgModule({
	declarations: [ JsLoggerPipe ],
	exports: [ JsLoggerPipe ]
})
export class UtilsModule {

}