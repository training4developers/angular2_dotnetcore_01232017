import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'JsLogger'
})
export class JsLoggerPipe implements PipeTransform {
	transform(value: any) {
		console.dir(value);
		return value;
	}
}