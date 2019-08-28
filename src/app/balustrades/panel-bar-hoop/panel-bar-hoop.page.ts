import { Component, OnInit } from '@angular/core';
import { BarHoopPanel } from '../../models/balustradeModel';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-panel-bar-hoop',
	templateUrl: './panel-bar-hoop.page.html',
	styleUrls: ['./panel-bar-hoop.page.scss']
})
export class PanelBarHoopPage implements OnInit {
	btnShowDwg: boolean = false;
	stairDWG: boolean = true;
	btnShowDwg2: boolean = false;
	stairDWG2: boolean = true;
	btnShowDwg3: boolean = false;
	stairDWG3: boolean = true;

	model: any = {};

	constructor(private service: DataService) {}

	ngOnInit() {
		this.getData();
	}

	chosePanelA(type: any) {
		this.model._type = parseInt(type);
		this.model.calculateData();
		//this.save();
	}

	getData() {
		this.model = new BarHoopPanel(
			null,
			1,
			null,
			null,
			null,
			null,
			null,
			null,
			'one',
			null,
			[]
		);
		this.service.getPanelBarHoop().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.model._length = parseFloat(data._length);
				this.model._barDiam = parseFloat(data._barDiam);
				this.model._barsNum = parseFloat(data._barsNum);
				this.model._barsNum2 = parseFloat(data._barsNum2);
				this.model._barsNum3 = parseFloat(data._barsNum3);
				this.model._hoopDiam = parseFloat(data._hoopDiam);
				this.model._type = parseFloat(data._type);
				this.model._hoopsNum = parseFloat(data._hoopsNum);
				this.model._page = parseFloat(data._page);
				this.model._gap = parseFloat(data._gap);
				this.model._startPoints = parseFloat(data._startPoints);
			}
			this.model.calculateData();
		});
	}

	calculateData() {
		this.model.calculateData();
		//this.save();
	}

	calculateInputChange(n1: any, n2: any, n3: any, n4: any, n5: any, n6: any) {
		this.model._length = parseFloat(n1);
		this.model._barDiam = parseFloat(n2);
		this.model._hoopDiam = parseFloat(n3);
		this.model._barsNum = parseFloat(n4);
		this.model._barsNum2 = parseFloat(n5);
		this.model._barsNum3 = parseFloat(n6);
		this.model.calculateData();
	}

	save() {
		this.service.setPanelBarHoop(this.model);
	}

	back() {
		window.history.back();
		this.save();
	}
}
