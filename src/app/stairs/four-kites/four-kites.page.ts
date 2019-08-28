import { Component, OnInit } from '@angular/core';
import { FourKiteModel } from '../../models/models-calculations';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-four-kites',
	templateUrl: './four-kites.page.html',
	styleUrls: ['./four-kites.page.scss']
})
export class FourKitesPage implements OnInit {
	stairDWG: boolean = true;

	btnShowDwg: boolean = false;

	stair: any = {};

	constructor(public service: DataService) {}

	ngOnInit() {
		this.stair = new FourKiteModel(
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null
		);
		this.service.getFourKite().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.stair._A = parseFloat(data._A);
				this.stair._B = parseFloat(data._B);
				this.stair._C = parseFloat(data._C);
				this.stair._width = parseFloat(data._width);
				this.stair._D = parseFloat(data._D);
				this.stair._dK = parseFloat(data._dK);
				this.stair._d1 = parseFloat(data._d1);
				this.stair._d2 = parseFloat(data._d2);
			}
		});
	}

	calculateStairData() {
		this.stair.calculateData();
		this.save();
	}

	calculateInputChange(num1: any, num2: any) {
		this.stair._C = parseFloat(num1);
		this.stair._width = parseFloat(num2);
		this.calculateStairData();
	}

	save() {
		this.service.setFourKite(this.stair);
	}
}
