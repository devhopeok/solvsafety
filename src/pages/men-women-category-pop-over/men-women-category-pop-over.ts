import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-men-women-category-pop-over',
  templateUrl: 'men-women-category-pop-over.html',
})
export class MenWomenCategoryPopOverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenWomenCategoryPopOverPage');
  }

  selectAndClosePopover(selection: string) {
    this.events.publish('genderShoppingChanged', selection == 'Men');
    this.viewController.dismiss();
  }

}
