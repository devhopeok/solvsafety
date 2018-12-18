import { Component } from '@angular/core';
import { NavController, PopoverController, Events, MenuController } from 'ionic-angular';
import { MenWomenCategoryPopOverPage } from '../men-women-category-pop-over/men-women-category-pop-over';
import { CategoryPage, Category } from '../category/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  homeSegment: string = "home";
  isMenSelected: boolean = true;
  pageTitle: string = 'MEN';

  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public events: Events,
    public menuCtrl: MenuController) {
    events.subscribe('genderShoppingChanged', (isMenSelected) => {
      this.isMenSelected = isMenSelected;
      this.pageTitle = this.isMenSelected ? 'MEN' : 'WOMEN';
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  showPopOver(myEvent) {
    let popover = this.popoverCtrl.create(MenWomenCategoryPopOverPage);

    popover.present({
      ev: myEvent
    });
  }

  goToSavedItems() {
    this.navCtrl.push('SavedItemsPage');
  }

  goToCategory(category: string) {
    var navParams = { 
      category: category, 
      isMenSelected: this.isMenSelected
    };

    this.navCtrl.push('CategoryPage', navParams);
  }

  goToProducts() {
    var navParams = { 
      category: 'CLOTHING', 
      isMenSelected: this.isMenSelected
    };

    this.navCtrl.push('ProductsPage', navParams);
  }

}
