import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recommended-pop-over',
  templateUrl: 'recommended-pop-over.html',
})
export class RecommendedPopOverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecommendedPopOverPage');
  }

  selectAndClosePopover() {
    this.viewController.dismiss();
  }

}
