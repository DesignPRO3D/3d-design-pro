import { Component, OnInit } from '@angular/core';
import { BalustradeAModel } from '../../models/models-calculations';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-balustrade',
	templateUrl: './balustrade.page.html',
	styleUrls: ['./balustrade.page.scss']
})
export class BalustradePage implements OnInit {
	stairDWG: boolean = true;

	btnShowDwg: boolean = false;

	stair: any = {};

	constructor(public service: DataService) {}

	ngOnInit() {
		this.stair = new BalustradeAModel(
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null
		);
		this.service.getBalustrade().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.stair._landing = parseFloat(data._landing);
				this.stair._Tgoing = parseFloat(data._Tgoing);
				this.stair._barD = parseFloat(data._barD);
				this.stair._postD = parseFloat(data._postD);
				this.stair._stepNum = parseFloat(data._stepNum);
				this.stair._d = parseFloat(data._d);
				this.stair._A = parseFloat(data._A);
				this.stair._barNum = parseFloat(data._barNum);
				this.stair._gap = parseFloat(data._gap);
			}
		});
	}

	calculateStairData() {
		this.stair.calculateData();
		this.save();
	}

	calculateInputChange(
		num1: any,
		num2: any,
		num3: any,
		num4: any,
		num5: any,
		num6: any,
		num7: any
	) {
		this.stair._d = parseFloat(num1);
		this.stair._postD = parseFloat(num2);
		this.stair._barD = parseFloat(num3);
		this.stair._landing = parseFloat(num4);
		this.stair._Tgoing = parseFloat(num5);
		this.stair._stepNum = parseFloat(num6);
		this.stair._barNum = parseFloat(num7);
		this.calculateStairData();
	}

	save() {
		this.service.setBalustrade(this.stair);
	}
}
