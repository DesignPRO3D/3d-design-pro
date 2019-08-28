import { Injectable } from '@angular/core';
import { StairModel } from './models/models-calculations';
import { REGULATIONSDATA } from './models/models-calculations';
import { Observable, of } from 'rxjs';
import { Storage } from '@ionic/storage';
import { STAIRREGDATA } from './models/models-calculations';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	constructor(public storage: Storage) {}

	//Start with stair
	getRegulationsData(): Observable<any> {
		return of(REGULATIONSDATA);
	}

	getStairRegData(): Observable<StairModel[]> {
		return of(STAIRREGDATA);
	}

	setStairSimple(data: any) {
		let newData = JSON.stringify(data);
		this.storage.set('stairSimpleMI', newData);
	}

	getStairSimple(): Promise<any> {
		return this.storage.get('stairSimpleMI');
	}

	getStairSimpleRegulationData(): Promise<any> {
		return this.storage.get('stairSimpleRegData');
	}

	setStairSimpleRegulationData(data: any) {
		let newData = JSON.stringify(data);
		this.storage.set('stairSimpleRegDataMI', newData);
	}

	setStairHeadroom(data: any) {
		let newData = JSON.stringify(data);
		this.storage.set('stairHeadroomMI', newData);
	}

	getStairHeadroom(): Promise<any> {
		return this.storage.get('stairHeadroomMI');
	}

	getLoftConversions(): Promise<any> {
		return this.storage.get('LoftConversionMI');
	}

	setLoftConversions(data: any) {
		let newData = JSON.stringify(data);
		this.storage.set('LoftConversionMI', newData);
	}

	setTwoKite(data: any) {
		let newData = JSON.stringify(data);
		this.storage.set('twoKiteMI', newData);
	}

	getTwoKite(): Promise<any> {
		return this.storage.get('twoKiteMI');
	}

	setFourKite(data: any) {
		let newData = JSON.stringify(data);
		this.storage.set('fourKiteMI', newData);
	}

	getFourKite(): Promise<any> {
		return this.storage.get('fourKiteMI');
	}

	setThreeKite(data: any) {
		let newData = JSON.stringify(data);
		this.storage.set('threeKiteMI', newData);
	}

	getThreeKite(): Promise<any> {
		return this.storage.get('threeKiteM');
	}

	getTaperedTreadsA(): Promise<any> {
		return this.storage.get('tapperedTreadsAM');
	}

	setTaperedTreadsA(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('tapperedTreadsAM', newData);
	}

	getTaperedTreadsB(): Promise<any> {
		return this.storage.get('tapperedTreadsBM');
	}

	setTaperedTreadsB(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('tapperedTreadsBM', newData);
	}

	getLanding(): Promise<any> {
		return this.storage.get('landingBM');
	}

	setLanding(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('landingBM', newData);
	}

	getBalustrade(): Promise<any> {
		return this.storage.get('balustradeBM');
	}

	setBalustrade(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('balustradeBM', newData);
	}

	getStairDiffFloorFinish(): Promise<any> {
		return this.storage.get('stairDiffFloorFinishBM');
	}

	setStairDiffFloorFinish(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('stairDiffFloorFinishBM', newData);
	}

	getCheckRiseGoing(): Promise<any> {
		return this.storage.get('checkRiseGoingBM');
	}

	setCheckRiseGoing(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('checkRiseGoingBM', newData);
	}

	getSpiralStairs(): Promise<any> {
		return this.storage.get('spiralStairsBM');
	}

	setSpiralStairs(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('spiralStairsBM', newData);
	}

	getPatternCalc(): Promise<any> {
		return this.storage.get('patternBM');
	}

	setPatternCalc(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('patternBM', newData);
	}

	//Start with balustrades
	getPanelSimple(): Promise<any> {
		return this.storage.get('panelSimpleXY');
	}

	setPanleSimple(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('panelSimpleXY', newData);
	}

	getPanelRing(): Promise<any> {
		return this.storage.get('panelRingXY');
	}

	setPanelRing(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('panelRingXY', newData);
	}

	getPanelBarHoop(): Promise<any> {
		return this.storage.get('panelBarHoopXY');
	}

	setPanelBarHoop(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('panelBarHoopXY', newData);
	}

	getPanelRake(): Promise<any> {
		return this.storage.get('panelRakeXY');
	}

	setPanelRake(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('panelRakeXY', newData);
	}

	getSectionSimple(): Promise<any> {
		return this.storage.get('sectionSimpleXY');
	}

	setSectionSimple(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('sectionSimpleXY', newData);
	}

	getSectionRake(): Promise<any> {
		return this.storage.get('sectionRakeXY');
	}

	setSectionRake(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('sectionRakeXY', newData);
	}

	getTopRailA(): Promise<any> {
		return this.storage.get('topRailACD');
	}

	setTopRailA(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('topRailACD', newData);
	}

	getTopRailB(): Promise<any> {
		return this.storage.get('topRailBCD');
	}

	setTopRailB(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('topRailBCD', newData);
	}

	getTopRailC(): Promise<any> {
		return this.storage.get('topRailCCD');
	}

	setTopRailC(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('topRailCCD', newData);
	}

	getTopRailD(): Promise<any> {
		return this.storage.get('topRailDCD');
	}

	setTopRailD(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('topRailDCD', newData);
	}

	getCarCompare(): Promise<any> {
		return this.storage.get('carCompareXZ');
	}

	setCarCompare(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('carCompareXZ', newData);
	}

	getSimpleGate(): Promise<any> {
		return this.storage.get('simpleGateXZ');
	}

	setSimpleGate(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('simpleGateXZ', newData);
	}

	getGlassBalustradeA(): Promise<any> {
		return this.storage.get('glassBalustradeAXC');
	}

	setGlassBalustradeA(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('glassBalustradeAXC', newData);
	}

	getGlassBalustradeB(): Promise<any> {
		return this.storage.get('glassBalustradeBXC');
	}

	setGlassBalustradeB(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('glassBalustradeBXC', newData);
	}

	getGlassBalustradeC(): Promise<any> {
		return this.storage.get('glassBalustradeCXC');
	}

	setGlassBalustradeC(data: any): Promise<any> {
		let newData = JSON.stringify(data);
		return this.storage.set('glassBalustradeCXC', newData);
	}
}
