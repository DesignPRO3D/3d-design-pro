import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RightTrianglePage } from './right-triangle.page';

const routes: Routes = [
  {
    path: '',
    component: RightTrianglePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RightTrianglePage]
})
export class RightTrianglePageModule {}
