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
			url: '/list',
			icon: 'fitness'
		},
		{
			title: 'Railings and Balustrade Calculator',
			url: '/balustrades&railings',
			icon: 'barcode'
		}
	];

	constructor(private platform: Platform) // private splashScreen: SplashScreen,
	// private statusBar: StatusBar
	{
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			// this.statusBar.styleDefault();
			// this.splashScreen.hide();
		});
	}
}
