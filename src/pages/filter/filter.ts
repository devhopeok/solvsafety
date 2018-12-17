import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FilterMultiSelectionPage } from '../filter-multi-selection/filter-multi-selection';
import { FilterRangePage } from '../filter-range/filter-range';

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }
  
  closeFilter() {
    this.viewController.dismiss();
  }

  goToMultiSelection(selectionType: string) {
    this.navCtrl.push('FilterMultiSelectionPage', {selectionType: selectionType});
  }

  goToRangeSelection(selectionType: string) {
    this.navCtrl.push('FilterRangePage', {selectionType: selectionType});
  }

}
