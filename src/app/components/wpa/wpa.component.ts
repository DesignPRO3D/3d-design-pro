import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
	selector: 'app-wpa',
	templateUrl: './wpa.component.html',
	styleUrls: ['./wpa.component.scss']
})
export class WpaComponent implements OnInit {
	constructor(private popover: PopoverController) {}

	ngOnInit() {}

	mailTo() {
		window.location.href = 'mailto:designpro3d@outlook.com';
		this.popover.dismiss();
	}
}
