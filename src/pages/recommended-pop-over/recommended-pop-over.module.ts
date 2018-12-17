import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommendedPopOverPage } from './recommended-pop-over';

@NgModule({
  declarations: [
    RecommendedPopOverPage,
  ],
  imports: [
    IonicPageModule.forChild(RecommendedPopOverPage),
  ],
})
export class RecommendedPopOverPageModule {}
