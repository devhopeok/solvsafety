import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-product-colour-pop-over',
  templateUrl: 'product-colour-pop-over.html',
})
export class ProductColourPopOverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductColourPopOverPage');
  }

  closePopover() {
    this.viewController.dismiss();
  }

}
