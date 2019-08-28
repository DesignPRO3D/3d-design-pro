import { Component, OnInit } from '@angular/core';
import { SpiralStairModel } from '../../models/models-calculations';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-spiral',
	templateUrl: './spiral.page.html',
	styleUrls: ['./spiral.page.scss']
})
export class SpiralPage implements OnInit {
	stairDWG: boolean = true;
	stairSegment: string = 'pageOne';
	stair: any = {};

	btnShowDwg: boolean = false;

	constructor(public service: DataService) {}

	ngOnInit() {
		this.stair = new SpiralStairModel(
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
		this.service.getSpiralStairs().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.stair._d = parseFloat(data._d);
				this.stair._radius = parseFloat(data._radius);
				this.stair._Tangle = parseFloat(data._Tangle);
				this.stair._Trise = parseFloat(data._Trise);
				this.stair._Tnum = parseFloat(data._Tnum);
				this.stair._BendingRadius = parseFloat(data._BendingRadius);
				this.stair._BarLength = parseFloat(data._BarLength);
				this.stair._BalustradeAngle = parseFloat(data._BalustradeAngle);
				this.stair._A = parseFloat(data._A);
			}
		});
	}

	calculateStairData() {
		this.stair.calculateData();
		this.save();
	}

	calculateInputChange(num1: any, num2: any, num3: any, num4: any, num5: any) {
		this.stair._d = parseFloat(num1);
		this.stair._radius = parseFloat(num2);
		this.stair._Tangle = parseFloat(num3);
		this.stair._Trise = parseFloat(num4);
		this.stair._Tnum = parseFloat(num5);
		this.calculateStairData();
	}

	save() {
		this.service.setSpiralStairs(this.stair);
	}
}
