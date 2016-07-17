import {Component} from '@angular/core';


@Component({
    selector: 'list-app',
    templateUrl: './app/app.list.html',
    styleUrls: ['./css/slider.css'],
 //directives: [TodoListComponent]
})


export class AppList {
	title:string;



	constructor() {
	this.title = 'Angular 2Do55';

	}

	  changer(nasos_state:any) {

		console.log(nasos_state);
	if (nasos_state === "true" ){nasos_state="checked"}
	else {nasos_state="unchecked"};
		console.log(nasos_state);
	var server = require("./me");
	server.me();


		}



	}
