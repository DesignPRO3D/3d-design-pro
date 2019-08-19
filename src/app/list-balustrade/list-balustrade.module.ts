import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListBalustradePage } from './list-balustrade.page';

const routes: Routes = [
  {
    path: '',
    component: ListBalustradePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListBalustradePage]
})
export class ListBalustradePageModule {}
