import { Component, OnInit } from '@angular/core';
import { TopRailAModel } from '../../models/balustradeModel';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-tread-a',
	templateUrl: './tread-a.page.html',
	styleUrls: ['./tread-a.page.scss']
})
export class TreadAPage implements OnInit {
	model: any = [];
	btnShowDwg: boolean = false;
	stairDWG: boolean = true;

	constructor(private service: DataService) {}

	ngOnInit() {
		this.model = new TopRailAModel(null, null, null, null, null, []);
		this.service.getTopRailA().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.model._length = parseFloat(data._length);
				this.model._D = parseFloat(data._D);
				this.model._barNum = parseFloat(data._barNum);
				this.model._barDiam = parseFloat(data._barDiam);
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
		this.service.setTopRailA(this.model);
	}

	calculateInputChange(v1: any, v2: any, v3: any, v4: any) {
		this.model._length = parseFloat(v1);
		this.model._D = parseFloat(v2);
		this.model._barDiam = parseFloat(v3);
		this.model._barNum = parseFloat(v4);

		this.calculateData();
	}
}
