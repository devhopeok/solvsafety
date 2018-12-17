import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterMultiSelectionPage } from './filter-multi-selection';

@NgModule({
  declarations: [
    FilterMultiSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterMultiSelectionPage),
  ],
})
export class FilterMultiSelectionPageModule {}
