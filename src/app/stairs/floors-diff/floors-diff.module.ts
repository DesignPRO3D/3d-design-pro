import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FloorsDiffPage } from './floors-diff.page';

const routes: Routes = [
  {
    path: '',
    component: FloorsDiffPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FloorsDiffPage]
})
export class FloorsDiffPageModule {}
