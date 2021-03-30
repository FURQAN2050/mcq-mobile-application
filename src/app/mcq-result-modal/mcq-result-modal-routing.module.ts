import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { McqResultModalPage } from './mcq-result-modal.page';

const routes: Routes = [
  {
    path: '',
    component: McqResultModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class McqResultModalPageRoutingModule {}
