import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-filter-range',
  templateUrl: 'filter-range.html',
})
export class FilterRangePage {
  pageTitle: string;
  priceRange: any = { lower: 20, upper: 500 };

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
    this.pageTitle = navParams.get('selectionType');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterRangePage');
  }

  reset() {
    this.priceRange = { lower: 20, upper: 500 };
  }

  closePriceRange() {
    this.viewController.dismiss();
  }

}
