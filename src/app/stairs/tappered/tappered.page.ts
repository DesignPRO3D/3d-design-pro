import { Component, OnInit } from '@angular/core';
import { TaperedTreadsA } from '../../models/models-calculations';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-tappered',
	templateUrl: './tappered.page.html',
	styleUrls: ['./tappered.page.scss']
})
export class TapperedPage implements OnInit {
	stairDWG: boolean = true;

	btnShowDwg: boolean = false;

	stair: any = {};

	constructor(public service: DataService) {}

	ngOnInit() {
		this.stair = new TaperedTreadsA(
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
		this.service.getTaperedTreadsA().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.stair._width = parseFloat(data._width);
				this.stair._Rin = parseFloat(data._Rin);
				this.stair._Rout = parseFloat(data._Rout);
				this.stair._angle = parseFloat(data._angle);
				this.stair._treadNum = parseFloat(data._treadNum);
				this.stair._angleT = parseFloat(data._angleT);
				this.stair._D1 = parseFloat(data._D1);
				this.stair._D2 = parseFloat(data._D2);
				this.stair._Lmid = parseFloat(data._Lmid);
			}
		});
	}

	calculateStairData() {
		this.stair.calculateData();
		this.save();
	}

	calculateInputChange(num1: any, num2: any, num3: any, num4: any) {
		this.stair._Rout = parseFloat(num1);
		this.stair._Rin = parseFloat(num2);
		this.stair._angle = parseFloat(num3);
		this.stair._treadNum = parseFloat(num4);
		this.calculateStairData();
	}

	save() {
		this.service.setTaperedTreadsA(this.stair);
	}
}
