import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SDKBrowserModule } from './shared/sdk/index';
import { McqResultModalPage } from './mcq-result-modal/mcq-result-modal.page';

@NgModule({
  declarations: [AppComponent,McqResultModalPage],
  entryComponents: [McqResultModalPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,SDKBrowserModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
