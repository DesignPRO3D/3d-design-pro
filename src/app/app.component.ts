import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	public appPages = [
		{
			title: 'Home',
			url: '/home',
			icon: 'home'
		},
		{
			title: 'Stair Calculator',
			url: '/stairs',
			icon: 'fitness'
		},
		{
			title: 'Railings & Balustrade Calculator',
			url: '/railings',
			icon: 'barcode'
		},
		{
			title: 'Extra',
			url: '/extra',
			icon: 'beer'
		},
		{
			title: 'Web Page Validation',
			url: '/web-progressive-app',
			icon: 'globe'
		},
		{
			title: 'Privacy Policy & Cookie Usage',
			url: '/privacy',
			icon: 'flag'
		}
	];

	constructor(
		private platform: Platform // private splashScreen: SplashScreen, // private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			// this.statusBar.styleDefault();
			// this.splashScreen.hide();
		});
	}
}
