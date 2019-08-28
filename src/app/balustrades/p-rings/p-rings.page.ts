import { Component, OnInit } from '@angular/core';
import { PanelRingModel } from '../../models/balustradeModel';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-p-rings',
	templateUrl: './p-rings.page.html',
	styleUrls: ['./p-rings.page.scss']
})
export class PRingsPage implements OnInit {
	btnShowDwg: boolean = false;
	stairDWG: boolean = true;
	btnShowDwg2: boolean = false;
	stairDWG2: boolean = true;
	btnShowDwg3: boolean = false;
	stairDWG3: boolean = true;

	model: any = {};

	constructor(private service: DataService) {}

	ngOnInit() {
		this.model = new PanelRingModel(
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			[],
			'one'
		);
		this.service.getPanelRing().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.model._length = parseFloat(data._length);
				this.model._barDiam = parseFloat(data._barDiam);
				this.model._barNum = parseFloat(data._barNum);
				this.model._ringNum = parseFloat(data._ringNum);
				this.model._ringDiam = parseFloat(data._ringDiam);
				this.model._gapEmpty = parseFloat(data._gapEmpty);
				this.model._page = data._page;
				this.model._type = parseFloat(data._type);
				this.model._startPoints = data._startPoints;
			}
		});
	}

	chosePanelA(type: any) {
		this.model._type = parseFloat(type);
		this.calculateData();
	}

	calculateData() {
		this.model.calculateData();
		this.save();
	}

	calculateInputChange(v1: any, v2: any, v3: any, v4: any) {
		this.model._length = parseFloat(v1);
		this.model._barDiam = parseFloat(v2);
		this.model._ringDiam = parseFloat(v3);
		this.model._ringNum = parseFloat(v4);
		this.calculateData();
	}

	save() {
		this.service.setPanelRing(this.model);
	}

	back() {
		window.history.back();
	}
}
