import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-bag',
  templateUrl: 'bag.html',
})
export class BagPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BagPage');
  }

  goToSavedItems() {
    this.navCtrl.push('SavedItemsPage');
  }

  goToHome() {
    this.app.getRootNav().setRoot(HomePage);
  }

}
