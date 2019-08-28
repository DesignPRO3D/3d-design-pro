import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-create-stair',
	templateUrl: './create-stair.component.html',
	styleUrls: ['./create-stair.component.scss']
})
export class CreateStairComponent implements OnInit {
	constructor(private modalCtrl: ModalController) {}

	ngOnInit() {}

	addStairAction(
		name: string,
		riseMin: any,
		riseMax: any,
		goingMin: any,
		goingMax: any,
		obstacleGap: any,
		pitch: any
	) {
		let data = {
			action: true,
			name: name,
			riseMin: parseFloat(riseMin),
			riseMax: parseFloat(riseMax),
			goingMin: parseFloat(goingMin),
			goingMax: parseFloat(goingMax),
			obstacleGap: parseFloat(obstacleGap),
			pitch: parseFloat(pitch)
		};
		this.modalCtrl.dismiss(data);
	}

	cancel() {
		let data = {
			action: false
		};
		this.modalCtrl.dismiss(data);
	}
}
