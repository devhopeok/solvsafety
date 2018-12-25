import { Component } from '@angular/core';
import { NavController, PopoverController, Events, MenuController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-form-fill',
  templateUrl: 'form-fill.html'
})
export class FormFillPage {
  module = {};
  report = {
    date: '',
    time: '',
    type: '',
    description: '',
  }
  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public events: Events,
    public menuCtrl: MenuController,
    public navParams: NavParams) {
      this.module = this.navParams.get('module');
  }

  // ionViewWillEnter() {
  //   this.menuCtrl.enable(true);
  // }
}
