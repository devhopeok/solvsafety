import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { AvailableFormPage } from '../available-form/available-form';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // tab1Root = HomePage;
  tab1Root = AvailableFormPage;

  constructor(public navCtrl: NavController) {
    
  }

  logout() {
    localStorage.removeItem('loginInfo');
    localStorage.removeItem('lastLoggedIn');
    this.navCtrl.setRoot(LoginPage);
  }
}
