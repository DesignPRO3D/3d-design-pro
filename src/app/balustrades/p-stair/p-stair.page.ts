import { Component, OnInit } from '@angular/core';
import { RakePanelModel } from '../../models/balustradeModel';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-p-stair',
	templateUrl: './p-stair.page.html',
	styleUrls: ['./p-stair.page.scss']
})
export class PStairPage implements OnInit {
	model: any = [];
	btnShowDwg: boolean = false;
	stairDWG: boolean = true;

	constructor(private service: DataService) {}

	ngOnInit() {
		this.model = new RakePanelModel(null, null, null, null, null, null, []);
		this.service.getPanelRake().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.model._length = parseFloat(data._length);
				this.model._D = parseFloat(data._D);
				this.model._angle = parseFloat(data._angle);
				this.model._barsNum = parseFloat(data._barsNum);
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
		this.service.setPanelRake(this.model);
	}

	calculateInputChange(v1: any, v2: any, v3: any, v4: any) {
		this.model._length = v1;
		this.model._angle = v2;
		this.model._barDiam = v3;
		this.model._barsNum = v4;

		this.calculateData();
	}
}
