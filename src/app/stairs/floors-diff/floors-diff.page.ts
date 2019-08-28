import { Component, OnInit } from '@angular/core';
import { DifferentFloorLevelModel } from '../../models/models-calculations';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-floors-diff',
	templateUrl: './floors-diff.page.html',
	styleUrls: ['./floors-diff.page.scss']
})
export class FloorsDiffPage implements OnInit {
	stairSegment: string = 'pageOne';
	stairDWG: boolean = true;

	btnShowDwg: boolean = false;

	calcType: boolean = true;
	calcTypeString = 'FFL';

	stair: any = {};

	constructor(public service: DataService) {}

	ngOnInit() {
		this.stair = new DifferentFloorLevelModel(
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
			true,
			[],
			[]
		);
		this.service.getStairDiffFloorFinish().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.stair._D1 = parseFloat(data._D1);
				this.stair._D2 = parseFloat(data._D2);
				this.stair._D3 = parseFloat(data._D3);
				this.stair._A1 = parseFloat(data._A1);
				this.stair._A2 = parseFloat(data._A2);
				this.stair._Trise = parseFloat(data._Trise);
				this.stair._FFL = parseFloat(data._FFL);
				this.stair._BTB = parseFloat(data._BTB);
				this.stair._FFLResult = parseFloat(data._FFLResult);
				this.stair._BTBResult = parseFloat(data._BTBResult);
				this.stair._riseNum = parseFloat(data._riseNum);
				this.stair._type = data._type;
				this.stair._startPointsA = data._startPointsA;
				this.stair._startPointsB = data._startPointsB;
			}
		});
	}

	calculateStairData() {
		this.stair.calculateData();
		this.save();
	}

	calculateInputChange(
		num3: any,
		num4: any,
		num5: any,
		num6: any,
		num7: any,
		num8: any
	) {
		this.stair._D1 = parseFloat(num3);
		this.stair._D2 = parseFloat(num4);
		this.stair._D3 = parseFloat(num5);
		this.stair._A1 = parseFloat(num6);
		this.stair._A2 = parseFloat(num7);
		this.stair._Trise = parseFloat(num8);
		this.calculateStairData();
	}

	calculateInputChangeA(num1: any) {
		this.stair._FFL = parseFloat(num1);
		this.calculateStairData();
	}

	calculateInputChangeB(num2: any) {
		this.stair._BTB = parseFloat(num2);
		this.calculateStairData();
	}

	save() {
		this.service.setStairDiffFloorFinish(this.stair);
	}

	calcTypeChange() {
		this.stair._type = this.calcType;
		if (this.calcType) {
			this.calcTypeString = 'FFL';
			this.calculateStairData();
		} else {
			this.calcTypeString = 'STS';
			this.calculateStairData();
		}
	}
}
