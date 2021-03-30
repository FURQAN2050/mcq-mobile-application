import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McqResultModalPageRoutingModule } from './mcq-result-modal-routing.module';

import { McqResultModalPage } from './mcq-result-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McqResultModalPageRoutingModule
  ],
  declarations: [McqResultModalPage]
})
export class McqResultModalPageModule {}
