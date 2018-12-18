import { Component } from '@angular/core';
import { NavController, PopoverController, Events } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public events: Events) {
    
  }
}
