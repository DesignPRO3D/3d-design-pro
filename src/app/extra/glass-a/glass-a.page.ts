import { Component, OnInit } from '@angular/core';
import { GlassBalustradeAModel } from '../../models/glassModels';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-glass-a',
	templateUrl: './glass-a.page.html',
	styleUrls: ['./glass-a.page.scss']
})
export class GlassAPage implements OnInit {
	model: any = [];
	btnShowDwg: boolean = false;
	mainDWG: boolean = true;

	constructor(private service: DataService) {}

	ngOnInit() {
		this.model = new GlassBalustradeAModel(
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
			null,
			[]
		);
		this.service.getGlassBalustradeA().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.model._postsCentre = parseFloat(data._postsCentre);
				this.model._handrailD = parseFloat(data._handrailD);
				this.model._gapA = parseFloat(data._gapA);
				this.model._gapB = parseFloat(data._gapB);
				this.model._gapC = parseFloat(data._gapC);
				this.model._height = parseFloat(data._height);
				this.model._panelsNum = parseFloat(data._panelsNum);
				this.model._postD = parseFloat(data._postD);
				this.model._postsNum = parseFloat(data._postsNum);
				this.model._glassWidth = parseFloat(data._glassWidth);
				this.model._glassHeight = parseFloat(data._glassHeight);
				this.model._startPoints = data._startPoints;
			}
		});
	}

	calculateData() {
		this.model.calculateData();
		this.save();
	}

	save() {
		this.service.setGlassBalustradeA(this.model);
	}

	calculateInputChange(
		v1: any,
		v2: any,
		v3: any,
		v4: any,
		v5: any,
		v6: any,
		v7: any,
		v8: any
	) {
		this.model._postsCentre = parseFloat(v1);
		this.model._handrailD = parseFloat(v2);
		this.model._gapA = parseFloat(v3);
		this.model._gapB = parseFloat(v4);
		this.model._gapC = parseFloat(v5);
		this.model._height = parseFloat(v6);
		this.model.__postD = parseFloat(v7);
		this.model._panelsNum = parseFloat(v8);

		this.calculateData();
	}

	back() {
		window.history.back();
	}
}
