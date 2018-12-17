import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BagPage } from '../pages/bag/bag';
import { SavedItemsPage } from '../pages/saved-items/saved-items';
import { AccountPage } from '../pages/account/account';
import { AppSettingsPage } from '../pages/app-settings/app-settings';
import { HelpFaqPage } from '../pages/help-faq/help-faq';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goToHome() {
    this.nav.setRoot(HomePage);
  }

  goToBag() {
    this.nav.setRoot(BagPage);
  }

  goToSavedItems() {
    this.nav.setRoot(SavedItemsPage);
  }

  goToMyAccount() {
    this.nav.setRoot(AccountPage);
  }

  goToAppSettings() {
    this.nav.setRoot(AppSettingsPage);
  }

  goToHelpAndFaq() {
    this.nav.setRoot(HelpFaqPage);
  }
}
