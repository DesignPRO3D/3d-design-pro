import { Component, OnInit } from '@angular/core';
import { SectionRakeModel } from '../../models/balustradeModel';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-section-stair',
	templateUrl: './section-stair.page.html',
	styleUrls: ['./section-stair.page.scss']
})
export class SectionStairPage implements OnInit {
	btnShowDwg: boolean = false;
	stairDWG: boolean = true;
	btnShowDwg2: boolean = false;
	stairDWG2: boolean = true;
	btnShowDwg3: boolean = false;
	stairDWG3: boolean = true;

	panelDWG: boolean = false;
	btnShowPanelDwg: boolean = true;

	model: any = {};

	constructor(private service: DataService) {}

	ngOnInit() {
		this.getData();
	}

	chosePanelA(type: string) {
		this.model._type = type;
		this.model.calculateData();
		this.save();
	}

	getData() {
		this.model = new SectionRakeModel(
			null,
			'one',
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			[]
		);
		this.service.getSectionRake().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				//console.log('Data from storage: ', data);
				this.model._sectionLength = parseFloat(data._sectionLength);
				this.model._type = data._type;
				this.model._angle = parseFloat(data._angle);
				this.model._panelsNum = parseFloat(data._panelsNum);
				this.model._postsNum = parseFloat(data._postsNum);
				this.model._postDiam = parseFloat(data._postDiam);
				this.model._panelLength = parseFloat(data._panelLength);
				this.model._panelD = parseFloat(data._panelD);
				this.model._barDiam = parseFloat(data._barDiam);
				this.model._barsNum = parseFloat(data._barsNum);
				this.model._D = parseFloat(data._D);
				this.model._startPoints = data._startPoints;
			}
			this.model.calculateData();
			//console.log('Model: ', this.model);
		});
	}

	calculateData() {
		this.model.calculateData();
		this.save();
	}

	calculateInputChange(n1: any, n2: any, n3: any, n4: any) {
		this.model._sectionLength = parseFloat(n1);
		this.model._angle = parseFloat(n2);
		this.model._postDiam = parseFloat(n3);
		this.model._panelsNum = parseFloat(n4);
		this.model.calculateData();
	}

	calculateInputChange2(n1: any, n2: any) {
		this.model._barDiam = parseFloat(n1);
		this.model._barsNum = parseFloat(n2);
		this.model.calculateData();
	}

	save() {
		this.service.setSectionRake(this.model);
	}
}
