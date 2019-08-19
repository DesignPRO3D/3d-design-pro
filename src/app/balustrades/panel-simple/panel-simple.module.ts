import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PanelSimplePage } from './panel-simple.page';

const routes: Routes = [
  {
    path: '',
    component: PanelSimplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PanelSimplePage]
})
export class PanelSimplePageModule {}
