import { Component, OnInit } from '@angular/core';
import { TaperedTreadsB } from '../../models/models-calculations';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-tappered-w',
	templateUrl: './tappered-w.page.html',
	styleUrls: ['./tappered-w.page.scss']
})
export class TapperedWPage implements OnInit {
	stairDWG: boolean = true;

	btnShowDwg: boolean = false;

	stair: any = {};

	constructor(public service: DataService) {}

	ngOnInit() {
		this.stair = new TaperedTreadsB(
			null,
			null,
			null,
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
		this.stair._Dout = 270;
		this.stair._Din = 270;
		this.service.getTaperedTreadsB().then(stringData => {
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
				this.stair._Lout = parseFloat(data._Lout);
				this.stair._Lin = parseFloat(data._Lin);
				this.stair._Dout = parseFloat(data._Dout);
				this.stair._Din = parseFloat(data._Din);
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
		num6: any
	) {
		this.stair._Rout = parseFloat(num1);
		this.stair._Rin = parseFloat(num2);
		this.stair._angle = parseFloat(num3);
		this.stair._Dout = parseFloat(num4);
		this.stair._Din = parseFloat(num5);
		this.stair._treadNum = parseFloat(num6);
		this.calculateStairData();
	}

	save() {
		this.service.setTaperedTreadsB(this.stair);
	}
}
