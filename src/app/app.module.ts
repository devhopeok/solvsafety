import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';


import { MenWomenCategoryPopOverPage } from '../pages/men-women-category-pop-over/men-women-category-pop-over';
import { BagPage } from '../pages/bag/bag';
import { SavedItemsPage } from '../pages/saved-items/saved-items';
import { AccountPage } from '../pages/account/account';
import { AppSettingsPage } from '../pages/app-settings/app-settings';
import { HelpFaqPage } from '../pages/help-faq/help-faq';
import { SavedItemsPageModule } from '../pages/saved-items/saved-items.module';
import { RecommendedPopOverPage } from '../pages/recommended-pop-over/recommended-pop-over';
import { FilterPage } from '../pages/filter/filter';
import { ProductSizePopOverPage } from '../pages/product-size-pop-over/product-size-pop-over';
import { ProductColourPopOverPage } from '../pages/product-colour-pop-over/product-colour-pop-over';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,

    MenWomenCategoryPopOverPage,
    RecommendedPopOverPage,
    ProductSizePopOverPage,
    ProductColourPopOverPage,
    BagPage,
    AccountPage,
    AppSettingsPage,
    HelpFaqPage,
    FilterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SavedItemsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,

    MenWomenCategoryPopOverPage,
    RecommendedPopOverPage,
    ProductSizePopOverPage,
    ProductColourPopOverPage,
    BagPage,
    SavedItemsPage,
    AccountPage,
    AppSettingsPage,
    HelpFaqPage,
    FilterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
