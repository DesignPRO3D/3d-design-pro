import { Component, OnInit } from '@angular/core';
import { TwoKiteModel } from '../../models/models-calculations';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-two-kites',
	templateUrl: './two-kites.page.html',
	styleUrls: ['./two-kites.page.scss']
})
export class TwoKitesPage implements OnInit {
	stairDWG: boolean = true;

	btnShowDwg: boolean = false;

	stair: any = {};

	errorRG = false;

	constructor(public service: DataService) {}

	ngOnInit() {
		this.stair = new TwoKiteModel(null, null, null, null, null, null);
		this.service.getTwoKite().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.stair._A = parseFloat(data._A);
				this.stair._width = parseFloat(data._width);
				this.stair._D = parseFloat(data._D);
				this.stair._dK = parseFloat(data._dK);
				this.stair._rise = parseFloat(data._rise);
				this.stair._2RG = parseFloat(data._2RG);
			}
		});
	}

	calculateStairData() {
		this.stair.calculateData();
		this.save();
	}

	calculateInputChange(num1: any, num2: any, num3: any) {
		this.stair._A = parseFloat(num1);
		this.stair._width = parseFloat(num2);
		this.stair._rise = parseFloat(num3);
		this.calculateStairData();
		if (this.stair._2RG < 500) {
			this.errorRG = true;
		} else if (this.stair._2RG > 750) {
			this.errorRG = true;
		} else {
			this.errorRG = false;
		}
	}

	save() {
		this.service.setTwoKite(this.stair);
	}
}
