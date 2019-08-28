import { Component, OnInit } from '@angular/core';
import { SimpleStairModel } from '../../models/models-calculations';
import { DataService } from '../../data.service';
import { ModalController } from '@ionic/angular';
import { StairModel } from '../../models/models-calculations';
import { CreateStairComponent } from '../../components/create-stair/create-stair.component';

@Component({
	selector: 'app-stepness',
	templateUrl: './stepness.page.html',
	styleUrls: ['./stepness.page.scss']
})
export class StepnessPage implements OnInit {
	stairSegment: string = 'calc';
	stairDWG: boolean = true;
	stairDWG2: boolean = true;
	stairDWG3: boolean = true;

	btnShowDwg: boolean = false;
	btnShowDwg2: boolean = false;
	btnShowDwg3: boolean = false;

	stair: any = {};

	//Import stair REGDATA 
	stairList: StairModel[] = [];
	activeStair: StairModel;

	bacckG: boolean = false;

	errorGoing: boolean = false;
	errorRise: boolean = false;
	errorPitch: boolean = false;
	errorGap: boolean = false;

	constructor(public service: DataService, public modalCtrl: ModalController) {}

	ngOnInit() {
		this.stair = new SimpleStairModel(
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
			null
		);
		this.service.getStairSimple().then(stringData => {
			let data = JSON.parse(stringData);
			if (data && typeof data !== 'undefined') {
				this.stair._stairGoing = parseFloat(data._stairGoing);
				this.stair._stairRise = parseFloat(data._stairRise);
				this.stair._stepparseFloat = parseFloat(data._stepparseFloat);
				this.stair._A = parseFloat(data._A);
				this.stair._B = parseFloat(data._B);
				this.stair._stepGoing = parseFloat(data._stepGoing);
				this.stair._stepRise = parseFloat(data._stepRise);
				this.stair._gap = parseFloat(data._gap);
				this.stair._obstacleStepNum = parseFloat(data._obstacleStepNum);
				this.stair._pitch = parseFloat(data._pitch);
			}
		});
		this.getStairListCustomer();
	}

	getStairListOriginal() {
		this.service.getStairRegData().subscribe(stair => {
			this.stairList = stair;
			this.activeStair = stair[0];
		});
	}

	getStairListCustomer() {
		this.service.getStairSimpleRegulationData().then(data => {
			if (data === null) {
				this.getStairListOriginal();
			} else {
				let dataObject = JSON.parse(data);
				if (dataObject && typeof dataObject !== 'undefined') {
					dataObject.forEach(stair => {
						let obj = new StairModel(
							stair._name,
							stair.riseMin,
							stair.riseMax,
							stair.goingMin,
							stair.goingMax,
							stair._pitchMax,
							stair._obstacleGap,
							stair._private,
							stair._active
						);
						this.stairList.push(obj);
					});
					let stair = this.stairList.filter(data => {
						return data._active === true;
					});
					this.activeStair = stair[0];
					this.changeClass();
				}
			}
		});
	}

	makeActive(data: any) {
		this.activeStair = data;
		this.bacckG = true;
		let id = this.stairList.indexOf(data);
		for (let i = 0; i < this.stairList.length; i++) {
			this.stairList[i]._active = false;
		}
		this.stairList[id]._active = true;
		this.saveRegData();
		this.changeClass();
	}

	calculateStairData() {
		this.stair.calculateStairData();
		this.save();
	}

	calculateStairData1(num: any) {
		this.stair._stairRise = num;
		this.stair.calculateStairData();
		this.save();
	}

	calculateStairData2(num: any) {
		this.stair._stairGoing = num;
		this.stair.calculateStairData();
		this.save();
	}

	calculateStairData3(num: any) {
		this.stair._stepNumber = num;
		this.stair.calculateStairData();
		this.save();
	}

	calculateStairData4(num: any) {
		this.stair._A = num;
		this.stair.calculateStairData();
		this.save();
	}

	calculateStairData5(num: any) {
		this.stair._B = num;
		this.stair.calculateStairData();
		this.save();
	}

	changeClass() {
		if (this.activeStair) {
			if (
				this.activeStair.goingMin < this.stair._stepGoing &&
				this.stair._stepGoing < this.activeStair.goingMax
			) {
				this.errorGoing = false;
			} else {
				this.errorGoing = true;
			}
			if (
				this.activeStair.riseMin < this.stair._stepRise &&
				this.stair._stepRise < this.activeStair.riseMax
			) {
				this.errorRise = false;
			} else {
				this.errorRise = true;
			}
			if (this.stair._pitch > this.activeStair._pitchMax) {
				this.errorPitch = true;
			} else {
				this.errorPitch = false;
			}
			if (this.stair._gap < this.activeStair._obstacleGap) {
				this.errorGap = true;
			} else {
				this.errorGap = false;
			}
		} else {
			this.errorGoing = false;
			this.errorGap = false;
			this.errorPitch = false;
			this.errorRise = false;
		}
	}

	save() {
		this.service.setStairSimple(this.stair);
		this.changeClass();
	}

	saveRegData() {
		this.service.setStairSimpleRegulationData(this.stairList);
	}

	deleteStair() {
		this.activeStair = null;
		let id = this.stairList.indexOf(this.activeStair);
		this.stairList.splice(id, 1);
		this.saveRegData();
		this.changeClass();
	}

	//Start with component newStair
	async presentModal() {
		const modal = await this.modalCtrl.create({
			component: CreateStairComponent
		});
		modal.onDidDismiss().then(val => {
			if (val.data.action) {
				let model = new StairModel(
					val.data.name,
					Number(val.data.riseMin),
					Number(val.data.riseMax),
					Number(val.data.goingMin),
					Number(val.data.goingMax),
					Number(val.data.obstacleGap),
					Number(val.data.pitch),
					false,
					false
				);
				this.stairList.push(model);
				this.saveRegData();
			}
		});
		return await modal.present();
	}

	newStair() {
		this.presentModal();
	}
}
