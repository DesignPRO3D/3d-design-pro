import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { WpaComponent } from '../components/wpa/wpa.component';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
	pageSegment: string = 'pageOne';
	showPopover: boolean = true;
	slideOpts = {
		initialSlide: 1,
		speed: 400
	};
	constructor(public popoverController: PopoverController) {}

	ngOnInit() {}

	ionViewDidEnter() {
		setTimeout(() => {
			this.presentPopover();
		}, 2000);
	}

	async presentPopover() {
		// const popover = await this.popoverController.create({
		// 	component: WpaComponent,
		// 	translucent: true
		// });
		// return await popover.present();
	}
}
