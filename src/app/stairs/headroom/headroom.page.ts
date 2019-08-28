import { Component, OnInit } from '@angular/core';
import { SimpleStairModel } from '../../models/models-calculations';
import { DataService } from '../../data.service';
import { ModalController } from '@ionic/angular';
import { StairModel } from '../../models/models-calculations';
import { CreateStairComponent } from '../../components/create-stair/create-stair.component';

@Component({
  selector: 'app-headroom',
  templateUrl: './headroom.page.html',
  styleUrls: ['./headroom.page.scss'],
})
export class HeadroomPage implements OnInit {

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
  erroMinH1: boolean = false;
  erroMinH2: boolean = false;

  constructor(
    private service: DataService,
    private modalCtrl: ModalController
  ) { 

  }

  ngOnInit() {
    this.stair = new SimpleStairModel(null, null, null, null, null, null, null, null, null, null, 
      null, null, null, null, null, null, null, null, null);
    this.stair._minHeadroom = 2000;
    this.service.getStairHeadroom().then(stringData => {
      let data = JSON.parse(stringData);
      if(data && typeof(data) !== "undefined") {
        this.stair._stairGoing = parseFloat(data._stairGoing);
        this.stair._stairRise = parseFloat(data._stairRise);
        this.stair._stepparseFloat = parseFloat(data._stepNumber);
        this.stair._A = parseFloat(data._A);
        this.stair._B = parseFloat(data._B);
        this.stair._stepGoing = parseFloat(data._stepGoing);
        this.stair._stepRise = parseFloat(data._stepRise);
        this.stair._gap = parseFloat(data._gap);
        this.stair._obstacleStepNum = parseFloat(data._obstacleStepNum);
        this.stair._pitch = parseFloat(data._pitch);
        this.stair._headroomTop = parseFloat(data._headroomTop);
        this.stair._headroomBottom = parseFloat(data._headroomBottom);
        this.stair._L = parseFloat(data._L);
        this.stair._P1 = parseFloat(data._P1);
        this.stair._P2 = parseFloat(data._P2);
        this.stair._H1 = parseFloat(data._H1);
        this.stair._H2 = parseFloat(data._H2);
        if(data._minHeadroom > 1) {
          this.stair._minHeadroom = parseFloat(data._minHeadroom);
        }
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

  minHeadroomChange(val: any) {
    if(val > 1) {
      this.stair._minHeadroom = parseFloat(val);
      this.changeClass();
      this.save();
    }
  }

  getStairListCustomer() {
    this.service.getStairSimpleRegulationData().then(data => {
      if(data === null) {
        this.getStairListOriginal();
      } else {
        let dataObject = JSON.parse(data);
        if(dataObject && typeof(dataObject) !== "undefined") {
          dataObject.forEach(stair => {
            let obj = new StairModel(stair._name, stair.riseMin, stair.riseMax, stair.goingMin, stair.goingMax,
              stair._pitchMax, stair._obstacleGap, stair._private, stair._active 
            )
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
    for(let i = 0; i < this.stairList.length; i++) {
      this.stairList[i]._active = false;
    }
    this.stairList[id]._active = true;
    this.saveRegData();
    this.changeClass();
  }

  calculateStairData() {
    this.stair.calculateStairData();
    this.stair.calculateHeadroom();
    this.save();
  }

  calculateStairData6(v1: any, v2: any, v3: any, v4: any, v5: any) {
    this.stair._headroomTop = v1;
    this.stair._headroomBottom = v2;
    this.stair._P1 = v3;
    this.stair._P2 = v4;
    this.stair._L = v5;
    this.stair.calculateHeadroom();
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
    if(this.activeStair) {
      if(this.activeStair.goingMin < this.stair._stepGoing && this.stair._stepGoing < this.activeStair.goingMax) {
        this.errorGoing = false;
      } else {
        this.errorGoing = true;
      }
      if(this.activeStair.riseMin < this.stair._stepRise && this.stair._stepRise < this.activeStair.riseMax) {
        this.errorRise = false;
      } else {
        this.errorRise = true;
      }
      if(this.stair._pitch > this.activeStair._pitchMax) {
        this.errorPitch = true;
      } else {
        this.errorPitch = false;
      }
      if(this.stair._gap < this.activeStair._obstacleGap) {
        this.errorGap = true;
      } else {
        this.errorGap = false;
      }
      if(this.stair._H1 < this.stair._minHeadroom) {
        this.erroMinH1 = true;
      } else {
        this.erroMinH1 = false;
      }
      if(this.stair._H2 < this.stair._minHeadroom) {
        this.erroMinH2 = true;
      } else {
        this.erroMinH2 = false;
      }
    } else {
      this.errorGoing = false;
      this.errorGap = false;
      this.errorPitch = false;
      this.errorRise = false;
      this.erroMinH1 = false;
      this.erroMinH2 = false;
    }
  }

  save() {
    this.service.setStairHeadroom(this.stair);
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
      if(val.data.action){
        let model = new StairModel(val.data.name, parseFloat(val.data.riseMin), parseFloat(val.data.riseMax),
        parseFloat(val.data.goingMin), parseFloat(val.data.goingMax), parseFloat(val.data.obstacleGap), 
        parseFloat(val.data.pitch), false, false);
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
