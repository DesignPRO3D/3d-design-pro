import { Component, OnInit } from '@angular/core';
import { GlassBalustradeCModel } from '../../models/glassModels';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-glass-c',
	templateUrl: './glass-c.page.html',
	styleUrls: ['./glass-c.page.scss']
})
export class GlassCPage implements OnInit {
	model: any = [];
	btnShowDwg: boolean = false;
	mainDWG: boolean = true;

	constructor(private service: DataService) {}

	ngOnInit() {
		this.model = new GlassBalustradeCModel(null, null, null, null, null);
		this.service.getGlassBalustradeC().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.model._sectionL = parseFloat(data._sectionL);
				this.model._gapA = parseFloat(data._gapA);
				this.model._gapB = parseFloat(data._gapB);
				this.model._panelsNum = parseFloat(data._panelsNum);
				this.model._glassWidth = parseFloat(data._glassWidth);
			}
		});
	}

	calculateData() {
		this.model.calculateData();
		this.save();
	}

	save() {
		this.service.setGlassBalustradeC(this.model);
	}

	calculateInputChange(v1: any, v2: any, v3: any, v4: any) {
		this.model._sectionL = parseFloat(v1);
		this.model._gapA = parseFloat(v2);
		this.model._gapB = parseFloat(v3);
		this.model._panelsNum = parseFloat(v4);

		this.calculateData();
	}

	back() {
		window.history.back();
	}
}
