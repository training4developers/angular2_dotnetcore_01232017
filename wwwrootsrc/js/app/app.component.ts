import { Component, Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Observable, Observer } from 'rxjs';

import 'rxjs';

interface Widget {
	id: number,
	name: string,
	description: string,
	color: string,
	size: string,
	quantity: number,
	price: number
}

@Injectable()
export class Counter {

	private ws: WebSocket;

	constructor() {
		
		this.ws = new WebSocket('ws://localhost:3030');

	} 

	getCounter() : Observable<number> {

		return Observable.create((observer: Observer<number>) => {

			this.ws.addEventListener('message', function(message) {
				observer.next(parseInt(message.data, 10));
			});

		});

	}

}


@Injectable()
export class Cars {

	constructor(private http: Http) { }

	private makes: string[] = ['Ford','Chevrolet','Tesla','Nissan','Toyota','Audi'];

	getAllMakes() {
		return this.makes;
	}

	addMake(newMake: string) {
		this.makes.push(newMake);
	}

	// getAll() : Promise<Widget[]> {
	// 	return this.http.get('/widgets').map(res => res.json()).toPromise<Widget[]>();
	// }

	getAll() : Observable<Widget[]> {
		return this.http.get('/widgets').map(res => res.json());
	}


	insert(widget: Widget) : Promise<Widget> {

		const headers = new Headers({
			'Content-Type': 'application/json'
		});

		const requestOptions = new RequestOptions({
			headers
		});

		return this.http.post('/widgets', JSON.stringify(widget), requestOptions)
			.map(res => res.json()).toPromise<Widget>();
	}

}


@Component({
	selector:'main',
	template: `{{numberCounter | async}}<ul><li *ngFor="let widget of widgets">{{widget.name}}</li></ul>
	<input type="text" #newMake (keyup.enter)="addMake(newMake.value)">`,
	providers: [Counter]
})
export class AppComponent {

	widgets: Widget[]

	numberCounter: Observable<number>;

	constructor(private cars: Cars, private counter: Counter) {
		//this.makes = this.cars.getAllMakes();

		this.cars.getAll().subscribe(widgets => {
			this.widgets = widgets;
		});

		this.cars.insert(<Widget>{
			name: 'Test Test Test'
		}).then(() => this.cars.getAll())
		.then(widgets => { });

		this.numberCounter = this.counter.getCounter();

		this.numberCounter.subscribe(n => console.log(n));

	}

	addMake(newMake: string) {
		console.log('add new make: ' + newMake);
		this.cars.addMake(newMake);
	}

}