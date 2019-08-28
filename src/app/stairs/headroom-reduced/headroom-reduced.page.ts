import { Component, OnInit } from '@angular/core';
import { LoftConversionModel } from '../../models/models-calculations';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-headroom-reduced',
	templateUrl: './headroom-reduced.page.html',
	styleUrls: ['./headroom-reduced.page.scss']
})
export class HeadroomReducedPage implements OnInit {
	stair: any = {};
	errorB: boolean = false;

	constructor(public service: DataService) {}

	ngOnInit() {
		this.stair = new LoftConversionModel(null, null, null);
		this.service.getLoftConversions().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.stair._A = parseFloat(data._A);
				this.stair._B = parseFloat(data._B);
				this.stair._C = parseFloat(data._C);
			}
		});
	}

	save() {
		this.service.setLoftConversions(this.stair);
	}

	calculateStairData() {
		this.stair.calculateB();
		this.changeClass();
		this.save();
	}

	changeClass() {
		if (this.stair._B > 1900) {
			this.errorB = false;
		} else {
			this.errorB = true;
		}
	}

	calculateInputChange(val: any, val2: any) {
		if (val > 0 && val2 > 0) {
			this.stair._A = parseFloat(val);
			this.stair._C = parseFloat(val2);
			this.calculateStairData();
		}
	}
}
