import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
	},
	{
		path: 'list',
		loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
	},
	{
		path: 'balustrades&railings',
		loadChildren: () =>
			import('./list-balustrade/list-balustrade.module').then(
				m => m.ListBalustradePageModule
			)
	},
	{
		path: 'railings-vertical-bars-a-b',
		loadChildren:
			'./balustrades/panel-bar-hoop/panel-bar-hoop.module#PanelBarHoopPageModule'
	},
  { path: 'panel-simple', loadChildren: './balustrades/panel-simple/panel-simple.module#PanelSimplePageModule' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
