import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TreadPatternPage } from './tread-pattern.page';

const routes: Routes = [
  {
    path: '',
    component: TreadPatternPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TreadPatternPage]
})
export class TreadPatternPageModule {}
