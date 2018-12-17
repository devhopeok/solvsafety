import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { RecommendedPopOverPage } from '../recommended-pop-over/recommended-pop-over';
import { FilterPage } from '../filter/filter';
import { ProductDetailsPage } from '../product-details/product-details';

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  isMenSelected: boolean;
  pageTitle: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public popoverCtrl: PopoverController, public modalCtrl: ModalController) {
    var category = navParams.get('category');
    if (category) {
      this.pageTitle = category.name;
    }
    
    this.isMenSelected = navParams.get('isMenSelected');

    console.log(navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  goToSavedItems() {
    this.navCtrl.push('SavedItemsPage');
  }

  showPopOver(myEvent) {
    let popover = this.popoverCtrl.create(RecommendedPopOverPage);

    popover.present({
      ev: myEvent
    });
  }

  showFilter() {
    let profileModal = this.modalCtrl.create(FilterPage);
    profileModal.present();
  }

  goToProductDetails() {
    this.navCtrl.push('ProductDetailsPage', { isMenSelected: this.isMenSelected});
  }

}
