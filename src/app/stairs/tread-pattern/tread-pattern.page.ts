import { Component, OnInit } from '@angular/core';
import { PatternModel } from '../../models/models-calculations';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-tread-pattern',
	templateUrl: './tread-pattern.page.html',
	styleUrls: ['./tread-pattern.page.scss']
})
export class TreadPatternPage implements OnInit {
	treadSegment: string = 'pageOne';
	tread: any = {};

	constructor(public service: DataService) {}

	ngOnInit() {
		this.tread = new PatternModel(
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
			null,
			null,
			true,
			'Squares',
			[],
			[]
		);
		this.service.getPatternCalc().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.tread._length = parseFloat(data._length);
				this.tread._width = parseFloat(data._width);
				this.tread._a = parseFloat(data._a);
				this.tread._d1 = parseFloat(data._d1);
				this.tread._d2 = parseFloat(data._d2);
				this.tread._d3 = parseFloat(data._d3);
				this.tread._d4 = parseFloat(data._d4);
				this.tread._cutNumH = parseFloat(data._cutNumH);
				this.tread._cutNumV = parseFloat(data._cutNumV);
				this.tread._G1 = parseFloat(data._G1);
				this.tread._G2 = parseFloat(data._G2);
				this.tread._C1 = parseFloat(data._C1);
				this.tread._C2 = parseFloat(data._C2);
				this.tread._type = data._type;
				this.tread._string = data._string;
			}
		});
	}

	calculateTreadData() {
		this.tread.calculateData();
		this.save();
	}

	calculateInputChange(
		num1: any,
		num2: any,
		num3: any,
		num4: any,
		num5: any,
		num6: any,
		num7: any,
		num8: any,
		num9: any
	) {
		this.tread._length = num1;
		this.tread._width = num2;
		this.tread._d1 = num3;
		this.tread._d2 = num4;
		this.tread._d3 = num5;
		this.tread._d4 = num6;
		this.tread._a = num7;
		this.tread._cutNumV = num8;
		this.tread._cutNumH = num9;
		this.calculateTreadData();
	}

	save() {
		this.service.setPatternCalc(this.tread);
	}

	typeChange() {
		if (this.tread._type) {
			this.tread._string = 'Squares';
			this.calculateTreadData();
		} else {
			this.tread._string = 'Circles';
			this.calculateTreadData();
		}
	}
}
