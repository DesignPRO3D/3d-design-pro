import { Component, OnInit } from '@angular/core';
import { RightAngledTriangleModel } from '../../models/scienceModel';

@Component({
	selector: 'app-right-triangle',
	templateUrl: './right-triangle.page.html',
	styleUrls: ['./right-triangle.page.scss']
})
export class RightTrianglePage implements OnInit {
	model: any = {};

	slideOpts = {
		effect: 'flip'
	};

	constructor() {}

	ngOnInit() {
		this.model = new RightAngledTriangleModel(
			null,
			null,
			null,
			null,
			null,
			false,
			null,
			1,
			null
		);
	}

	calculate() {
		this.model.calculateData();
	}

	reset() {
		this.model._a = null;
		this.model._b = null;
		this.model._c = null;
		this.model._alpha = null;
		this.model._beta = null;
		this.model._result = false;
		this.model._area = null;
	}

	change() {
		this.model.calculateData();
	}

	back() {
		window.history.back();
	}
}
