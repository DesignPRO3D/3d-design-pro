import { Component, OnInit } from '@angular/core';
import { TriangleModel } from '../../models/scienceModel';

@Component({
	selector: 'app-triangle',
	templateUrl: './triangle.page.html',
	styleUrls: ['./triangle.page.scss']
})
export class TrianglePage implements OnInit {
	model: any = {};

	slideOpts = {
		effect: 'flip'
	};

	constructor() {}

	ngOnInit() {
		this.model = new TriangleModel(
			null,
			null,
			null,
			null,
			null,
			null,
			false,
			null,
			1,
			null,
			1,
			null,
			null
		);
	}

	calculate() {
		this.model._result = true;
		this.model.calculateData();
		//console.log(this.model);
	}

	reset() {
		this.model._a = null;
		this.model._b = null;
		this.model._c = null;
		this.model._alpha = null;
		this.model._beta = null;
		this.model._gamma = null;
		this.model._result = false;
		this.model._area = null;
		this.model._type = 1;
		this.model._h = null;
		this.model._x = null;
	}

	change() {
		this.model.calculateData();
	}

	changeType(val: number) {
		this.model._type = val;
		this.model._a = null;
		this.model._b = null;
		this.model._c = null;
		this.model._alpha = null;
		this.model._beta = null;
		this.model._gamma = null;
		this.model._result = false;
		this.model._area = null;
		this.model._h = null;
		this.model._x = null;
	}

	back() {
		window.history.back();
	}
}
