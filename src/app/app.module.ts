import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Screenshot } from '@ionic-native/screenshot/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SDKBrowserModule } from './shared/sdk/index';
import { McqResultModalPage } from './mcq-result-modal/mcq-result-modal.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';



@NgModule({
  declarations: [AppComponent], //,McqResultModalPage
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,SDKBrowserModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Screenshot,SocialSharing],
  bootstrap: [AppComponent],
})
export class AppModule {}
