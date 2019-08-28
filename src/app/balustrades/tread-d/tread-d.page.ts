import { Component, OnInit } from '@angular/core';
import { TopRailDModel } from '../../models/balustradeModel';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-tread-d',
	templateUrl: './tread-d.page.html',
	styleUrls: ['./tread-d.page.scss']
})
export class TreadDPage implements OnInit {
	model: any = [];
	btnShowDwg: boolean = false;
	stairDWG: boolean = true;

	constructor(private service: DataService) {}

	ngOnInit() {
		this.model = new TopRailDModel(
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null
		);
		this.service.getTopRailD().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.model._length = parseFloat(data._length);
				this.model._D1 = parseFloat(data._D1);
				this.model._D2 = parseFloat(data._D2);
				this.model._barDiam = parseFloat(data._barDiam);
				this.model._hoopDiam = parseFloat(data._hoopDiam);
				this.model._gap = parseFloat(data._gap);
				this.model._S1 = parseFloat(data._S1);
				this.model._S2 = parseFloat(data._S2);
			}
		});
	}

	calculateData() {
		this.model.calculateData();
		this.save();
	}

	save() {
		this.service.setTopRailD(this.model);
	}

	calculateInputChange(v1: any, v2: any, v3: any, v4: any) {
		this.model._length = parseFloat(v1);
		this.model._D1 = parseFloat(v2);
		this.model._hoopDiam = parseFloat(v3);
		this.model._barDiam = parseFloat(v4);

		this.calculateData();
	}
}
