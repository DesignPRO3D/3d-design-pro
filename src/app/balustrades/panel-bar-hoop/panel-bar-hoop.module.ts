import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PanelBarHoopPage } from './panel-bar-hoop.page';

const routes: Routes = [
  {
    path: '',
    component: PanelBarHoopPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PanelBarHoopPage]
})
export class PanelBarHoopPageModule {}
