import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { SimpleGateModel } from '../../models/gateModels';

@Component({
	selector: 'app-gates',
	templateUrl: './gates.page.html',
	styleUrls: ['./gates.page.scss']
})
export class GatesPage implements OnInit {
	mainDWG: boolean = true;
	modelSegment: string = 'pageOne';
	model: any = {};

	btnShowDwg: boolean = false;

	dogBarsLabel = 'Gate with dog bars';

	slideOpts = {
		effect: 'flip'
	};

	constructor(public service: DataService) {}

	ngOnInit() {
		this.model = new SimpleGateModel(
			true,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			[],
			[]
		);
		this.service.getSimpleGate().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.model._gateWidth = parseFloat(data._gateWidth);
				this.model._postDiam = parseFloat(data._postDiam);
				this.model._gapB = parseFloat(data._gapB);
				this.model._D = parseFloat(data._D);
				this.model._barDiam = parseFloat(data._barDiam);
				this.model._barsNum = parseFloat(data._barsNum);
				this.model._gap = parseFloat(data._gap);
				this.model._widthB = parseFloat(data._widthB);
				this.model._barLength = parseFloat(data._barLength);
				this.model._startPointsA = data._startPointsA;
				this.model._startPointsB = data._startPointsB;
			}
			if (this.model._dogBars) {
				this.dogBarsLabel = 'Gate with dog bars';
			} else {
				this.dogBarsLabel = 'Gate without dog bars';
			}
		});
	}

	calculateInputChange(n1: any, n2: any, n3: any, n4: any, n5: any, n6: any) {
		this.model._gateWidth = parseFloat(n1);
		this.model._postDiam = parseFloat(n2);
		this.model._gapB = parseFloat(n3);
		this.model._D = parseFloat(n4);
		this.model._barDiam = parseFloat(n5);
		this.model._barsNum = parseFloat(n6);

		this.model.calculateData();
		this.save();
	}

	calculateData() {
		this.model.calculateData();
		this.save();
	}

	back() {
		window.history.back();
	}

	save() {
		this.service.setSimpleGate(this.model);
	}

	switchDogBars() {
		if (this.model._dogBars) {
			this.model._dogBars = false;
			this.dogBarsLabel = 'Gate without dog bars';
		} else {
			this.model._dogBars = true;
			this.dogBarsLabel = 'Gate with dog bars';
		}
		this.save();
	}
}
