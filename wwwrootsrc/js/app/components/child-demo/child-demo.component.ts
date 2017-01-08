import { Component, ViewEncapsulation } from '@angular/core';

let counter = 0;

@Component({
	selector: 'child-demo',
	template: require('./child-demo.component.html'),
	styles: [require('./child-demo.component.scss')],
	encapsulation: ViewEncapsulation.None
})
export class ChildDemoComponent {

	constructor() {
		console.log('child demo component instance', counter++);
	}

}