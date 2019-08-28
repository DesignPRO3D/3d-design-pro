import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HeadroomReducedPage } from './headroom-reduced.page';

const routes: Routes = [
  {
    path: '',
    component: HeadroomReducedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HeadroomReducedPage]
})
export class HeadroomReducedPageModule {}
