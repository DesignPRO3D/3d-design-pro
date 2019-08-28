import { Component, OnInit } from '@angular/core';
import { LandingModel } from '../../models/models-calculations';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.page.html',
	styleUrls: ['./landing.page.scss']
})
export class LandingPage implements OnInit {
	stairDWG: boolean = true;

	btnShowDwg: boolean = false;

	stair: any = {};

	errorLandingWidth: boolean = false;

	constructor(public service: DataService) {}

	ngOnInit() {
		this.stair = new LandingModel(null, null, null, null, null);
		this.service.getLanding().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.stair._A = parseFloat(data._A);
				this.stair._width = parseFloat(data._width);
				this.stair._going = parseFloat(data._going);
				this.stair._treadNum = parseFloat(data._treadNum);
				this.stair._landingWidth = parseFloat(data._landingWidth);
			}
		});
	}

	calculateStairData() {
		this.stair.calculateData();
		this.save();
		this.changeClass();
	}

	calculateInputChange(num1: any, num2: any, num3: any, num4: any) {
		this.stair._A = parseFloat(num1);
		this.stair._width = parseFloat(num2);
		this.stair._going = parseFloat(num3);
		this.stair._treadNum = parseFloat(num4);
		this.calculateStairData();
	}

	changeClass() {
		if (this.stair._landingWidth < this.stair._width) {
			this.errorLandingWidth = true;
		} else {
			this.errorLandingWidth = false;
		}
	}

	save() {
		this.service.setLanding(this.stair);
	}
}
