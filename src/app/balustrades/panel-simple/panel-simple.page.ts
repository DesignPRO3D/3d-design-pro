import { Component, OnInit } from '@angular/core';
import { PanelSimpleModel } from '../../models/balustradeModel';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-panel-simple',
	templateUrl: './panel-simple.page.html',
	styleUrls: ['./panel-simple.page.scss']
})
export class PanelSimplePage implements OnInit {
	model: any = [];
	btnShowDwg: boolean = false;
	stairDWG: boolean = true;

	constructor(private service: DataService) {}

	ngOnInit() {
		this.model = new PanelSimpleModel(null, null, null, null, []);
		this.service.getPanelSimple().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.model._length = parseFloat(data._length);
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
		this.service.setPanleSimple(this.model);
	}

	calculateInputChange(v1: any, v2: any, v3: any) {
		this.model._length = parseFloat(v1);
		this.model._barDiam = parseFloat(v2);
		this.model._barNum = parseFloat(v3);

		this.calculateData();
	}

	back() {
		window.history.back();
	}
}
