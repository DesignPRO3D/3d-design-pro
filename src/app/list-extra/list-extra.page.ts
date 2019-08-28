import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-list-extra',
	templateUrl: './list-extra.page.html',
	styleUrls: ['./list-extra.page.scss']
})
export class ListExtraPage implements OnInit {
	constructor() {}

	ngOnInit() {}

	mailTo() {
		window.location.href = 'mailto:designpro3d@outlook.com';
	}
}
