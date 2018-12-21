import { Component } from '@angular/core';
import { NavController, PopoverController, Events, MenuController } from 'ionic-angular';
import { MenWomenCategoryPopOverPage } from '../men-women-category-pop-over/men-women-category-pop-over';
import { CategoryPage, Category } from '../category/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  modules = [{icon: 'md-warning', name: 'Incident'},
            {icon: 'ios-copy', name: 'Hazard'},
            {icon: 'md-checkbox-outline', name: 'Inspection'}];
            
  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public events: Events,
    public menuCtrl: MenuController) {
    
  }

  // ionViewWillEnter() {
  //   this.menuCtrl.enable(true);
  // }
}
