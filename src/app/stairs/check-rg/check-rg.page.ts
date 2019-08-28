import { Component, OnInit } from '@angular/core';
import { CheckRiseGoingModel } from '../../models/models-calculations';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-check-rg',
	templateUrl: './check-rg.page.html',
	styleUrls: ['./check-rg.page.scss']
})
export class CheckRGPage implements OnInit {
	stairDWG: boolean = true;
	stairSegment: string = 'pageOne';
	stair: any = {};

	btnShowDwg: boolean = false;

	constructor(public service: DataService) {}

	ngOnInit() {
		this.stair = new CheckRiseGoingModel(null, null, null, null, null, []);
		this.service.getCheckRiseGoing().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.stair._length = parseFloat(data._length);
				this.stair._angle = parseFloat(data._angle);
				this.stair._Tgoing = parseFloat(data._Tgoing);
				this.stair._Trise = parseFloat(data._Trise);
				this.stair._stepNum = parseFloat(data._stepNum);
				this.stair._startPoints = data._startPoints;
			}
		});
	}

	calculateStairData() {
		this.stair.calculateData();
		this.save();
	}

	calculateInputChange(num1: any, num2: any, num3: any) {
		this.stair._length = parseFloat(num1);
		this.stair._angle = parseFloat(num2);
		this.stair._stepNum = parseFloat(num3);
		this.calculateStairData();
	}

	save() {
		this.service.setCheckRiseGoing(this.stair);
	}
}
