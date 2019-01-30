import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvailableFormPage } from './available-form';

@NgModule({
  declarations: [
    AvailableFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AvailableFormPage),
  ],
})
export class AvailableFormPageModule {}
