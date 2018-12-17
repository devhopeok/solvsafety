import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { ProductColourPopOverPage } from '../product-colour-pop-over/product-colour-pop-over';
import { ProductSizePopOverPage } from '../product-size-pop-over/product-size-pop-over';

@IonicPage()
@Component({
  selector: 'page-saved-items',
  templateUrl: 'saved-items.html',
})
export class SavedItemsPage {
  savedItems: Item[] = [];
  itemsCount: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.getExampleItems();
  }

  getExampleItems() {
    // Discounted item
    var discountedItem = new Item();
    discountedItem.name = "Pull&Bear Denim Jacket In Black";
    discountedItem.price = 40;
    discountedItem.hasDiscount = true;
    discountedItem.discountedPrice = 30;
    discountedItem.picture = "https://res.cloudinary.com/cediim8/image/upload/v1523344614/product-1.jpg";

    this.savedItems.push(discountedItem);

    // Item where the size and colour have been selected
    var setSizeAndColourItem = new Item();
    setSizeAndColourItem.name = "ASOS Embroidered Mini Dress";
    setSizeAndColourItem.price = 109;
    setSizeAndColourItem.sizeAndColourSelected = true;
    setSizeAndColourItem.size = "M";
    setSizeAndColourItem.colour = "Black";
    setSizeAndColourItem.canAddToBag = true;
    setSizeAndColourItem.picture = "https://res.cloudinary.com/cediim8/image/upload/v1523415017/women-product-8.jpg";

    this.savedItems.push(setSizeAndColourItem);

    // Normal item without discount and size and colour not set yet
    var item = new Item();
    item.name = "Lee Sherpa Rider Denim Jacket";
    item.price = 218;
    item.hasDiscount = false;
    item.picture = "https://res.cloudinary.com/cediim8/image/upload/v1523344614/product-4.jpg";
    item.size = "M";
    item.colour = "Black";

    this.savedItems.push(item);

    this.itemsCount = this.savedItems.length;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavedItemsPage');
  }

  editItem(item: Item) {
    item.isInEditMode = !item.isInEditMode;
  }

  colourPopOver(myEvent) {
    let popover = this.popoverCtrl.create(ProductColourPopOverPage);

    popover.present({
      ev: myEvent
    });
  }

  sizePopOver(myEvent) {
    let popover = this.popoverCtrl.create(ProductSizePopOverPage);

    popover.present({
      ev: myEvent
    });
  }
}

export class Item {
  name: string;
  price: number;
  hasDiscount: boolean;
  discountedPrice: number;
  picture: string;
  sizeAndColourSelected: boolean;
  size: string;
  colour: string;
  canAddToBag: boolean;
  isInEditMode: boolean;
}
