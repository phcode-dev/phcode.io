import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MainModule } from '../main/main.module';
import { CardComponent } from 'src/app/shared/card/card.component';


@NgModule({
  declarations: [AboutComponent, CardComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MainModule
  ]
})
export class AboutModule { }
