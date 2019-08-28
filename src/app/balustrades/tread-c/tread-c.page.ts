import { Component, OnInit } from '@angular/core';
import { TopRailCModel } from '../../models/balustradeModel';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-tread-c',
	templateUrl: './tread-c.page.html',
	styleUrls: ['./tread-c.page.scss']
})
export class TreadCPage implements OnInit {
	model: any = [];
	btnShowDwg: boolean = false;
	stairDWG: boolean = true;

	constructor(private service: DataService) {}

	ngOnInit() {
		this.model = new TopRailCModel(
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			[]
		);
		this.service.getTopRailC().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.model._length = parseFloat(data._length);
				this.model._D = parseFloat(data._D);
				this.model._barNum = parseFloat(data._barNum);
				this.model._barDiam = parseFloat(data._barDiam);
				this.model._hoopsNum = parseFloat(data._hoopsNum);
				this.model._hoopDiam = parseFloat(data._hoopDiam);
				this.model._gap = parseFloat(data._gap);
				this.model._startPoints = data._startPoints;
			}
		});
	}

	calculateData() {
		this.model.calculateData();
		this.save();
	}

	save() {
		this.service.setTopRailC(this.model);
	}

	calculateInputChange(v1: any, v2: any, v3: any, v4: any, v5: any) {
		this.model._length = parseFloat(v1);
		this.model._D = parseFloat(v2);
		this.model._hoopDiam = parseFloat(v3);
		this.model._barDiam = parseFloat(v4);
		this.model._barNum = parseFloat(v5);

		this.calculateData();
	}
}
