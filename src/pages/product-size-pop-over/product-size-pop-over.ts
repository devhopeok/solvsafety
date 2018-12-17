import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-product-size-pop-over',
  templateUrl: 'product-size-pop-over.html',
})
export class ProductSizePopOverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductSizePopOverPage');
  }

  closePopover() {
    this.viewController.dismiss();
  }

}
