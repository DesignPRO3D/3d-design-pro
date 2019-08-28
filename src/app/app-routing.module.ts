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
		path: 'stairs',
		loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
	},
	{
		path: 'railings',
		loadChildren: () =>
			import('./list-balustrade/list-balustrade.module').then(
				m => m.ListBalustradePageModule
			)
	},
	{
		path: 'web-progressive-app',
		loadChildren: () =>
			import('./it/page-validation/page-validation.module').then(
				m => m.PageValidationPageModule
			)
	},
	{
		path: 'extra',
		loadChildren: () =>
			import('./list-extra/list-extra.module').then(m => m.ListExtraPageModule)
	},
	{
		path: 'privacy',
		loadChildren: () =>
			import('./privacy/privacy.module').then(m => m.PrivacyPageModule)
	},
	{
		path: 'railings/panel-bar-hoop',
		loadChildren:
			'./balustrades/panel-bar-hoop/panel-bar-hoop.module#PanelBarHoopPageModule'
	},
	{
		path: 'railings/panel',
		loadChildren:
			'./balustrades/panel-simple/panel-simple.module#PanelSimplePageModule'
	},
	{
		path: 'railings/panel-rings',
		loadChildren: './balustrades/p-rings/p-rings.module#PRingsPageModule'
	},
	{
		path: 'railings/stair-panel',
		loadChildren: './balustrades/p-stair/p-stair.module#PStairPageModule'
	},
	{
		path: 'railings/section',
		loadChildren: './balustrades/section/section.module#SectionPageModule'
	},
	{
		path: 'railings/section-stair',
		loadChildren:
			'./balustrades/section-stair/section-stair.module#SectionStairPageModule'
	},
	{
		path: 'railings/spindles-aa',
		loadChildren: './balustrades/tread-a/tread-a.module#TreadAPageModule'
	},
	{
		path: 'railings/spindles-ab',
		loadChildren: './balustrades/tread-b/tread-b.module#TreadBPageModule'
	},
	{
		path: 'railings/spindles-ba',
		loadChildren: './balustrades/tread-c/tread-c.module#TreadCPageModule'
	},
	{
		path: 'railings/spindles-a-b',
		loadChildren: './balustrades/tread-d/tread-d.module#TreadDPageModule'
	},
	{
		path: 'stairs/stepness',
		loadChildren: './stairs/stepness/stepness.module#StepnessPageModule'
	},
	{
		path: 'stairs/headroom',
		loadChildren: './stairs/headroom/headroom.module#HeadroomPageModule'
	},
	{
		path: 'stairs/headroom-reduced',
		loadChildren:
			'./stairs/headroom-reduced/headroom-reduced.module#HeadroomReducedPageModule'
	},
	{
		path: 'stairs/four-kites',
		loadChildren: './stairs/four-kites/four-kites.module#FourKitesPageModule'
	},
	{
		path: 'stairs/three-kites',
		loadChildren: './stairs/three-kites/three-kites.module#ThreeKitesPageModule'
	},
	{
		path: 'stairs/two-kites',
		loadChildren: './stairs/two-kites/two-kites.module#TwoKitesPageModule'
	},
	{
		path: 'stairs/tapered',
		loadChildren: './stairs/tappered/tappered.module#TapperedPageModule'
	},
	{
		path: 'stairs/tapered-w',
		loadChildren: './stairs/tappered-w/tappered-w.module#TapperedWPageModule'
	},
	{
		path: 'stairs/landing',
		loadChildren: './stairs/landing/landing.module#LandingPageModule'
	},
	{
		path: 'stairs/balustrade',
		loadChildren: './stairs/balustrade/balustrade.module#BalustradePageModule'
	},
	{
		path: 'stairs/differentFinishFloors',
		loadChildren: './stairs/floors-diff/floors-diff.module#FloorsDiffPageModule'
	},
	{
		path: 'stairs/going-rise',
		loadChildren: './stairs/check-rg/check-rg.module#CheckRGPageModule'
	},
	{
		path: 'stairs/spiral',
		loadChildren: './stairs/spiral/spiral.module#SpiralPageModule'
	},
	{
		path: 'stairs/tread-pattern',
		loadChildren:
			'./stairs/tread-pattern/tread-pattern.module#TreadPatternPageModule'
	},
	{
		path: 'extra/metaal-gates',
		loadChildren: './extra/gates/gates.module#GatesPageModule'
	},
	{
		path: 'extra/glass-balustrade-proffessional',
		loadChildren: './extra/glass-a/glass-a.module#GlassAPageModule'
	},
	{
		path: 'extra/glass-balustrade-elegance',
		loadChildren: './extra/glass-b/glass-b.module#GlassBPageModule'
	},
	{
		path: 'extra/glass-balustrade-frameless',
		loadChildren: './extra/glass-c/glass-c.module#GlassCPageModule'
	},
	{
		path: 'extra/right-angled-triangle',
		loadChildren:
			'./extra/right-triangle/right-triangle.module#RightTrianglePageModule'
	},
	{
		path: 'extra/triangle',
		loadChildren: './extra/triangle/triangle.module#TrianglePageModule'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
