import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LandingComponent } from './sections/landing/landing.component';
import { NavComponent } from './sections/nav/nav.component';
import { BannerComponent } from './sections/landing/banner/banner.component';
import { MouseMoveDirective } from 'src/app/directives/mouse.move.directive';
import { MeetPhoenixComponent } from './sections/landing/meet-phoenix/meet-phoenix.component';
import { FeaturesComponent } from './sections/landing/features/features.component';
import { WorkspacesComponent } from './sections/landing/workspaces/workspaces.component';
import { ServerComponent } from './sections/landing/server/server.component';
import { FooterComponent } from './sections/landing/footer/footer.component';
import { DownloadComponent } from './sections/landing/banner/download/download.component';
import { AlertComponent } from './sections/landing/banner/alert/alert.component';


@NgModule({
  declarations: [
    MainComponent,
    LandingComponent,
    NavComponent,
    AlertComponent,
    DownloadComponent,
    BannerComponent,
    MouseMoveDirective,
    MeetPhoenixComponent,
    FeaturesComponent,
    WorkspacesComponent,
    ServerComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports: [
    FooterComponent, NavComponent
  ]
})
export class MainModule { }
