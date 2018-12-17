import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsPage } from '../products/products';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  isMenSelected: boolean;
  pageTitle: string;

  products: Category[] = [];
  ranges: Category[] = [];
  occasions: Category[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageTitle = navParams.get('category');
    this.isMenSelected = navParams.get('isMenSelected');

    this.initialiseProducts();
    this.initialiseRanges();
    this.initialiseOccasions();
  }

  initialiseProducts() {
    if (this.isMenSelected) {
      this.products.push(new Category('New In', 'https://res.cloudinary.com/cediim8/image/upload/v1523343800/new-in.jpg'));
      this.products.push(new Category('Hoodies & Sweatshirts', 'https://res.cloudinary.com/cediim8/image/upload/v1523343799/hoodies-sweatshirts.jpg'));
      this.products.push(new Category('Jackets and Coats', 'https://res.cloudinary.com/cediim8/image/upload/v1523343799/jackets-coats.jpg'));
      this.products.push(new Category('Jeans', 'https://res.cloudinary.com/cediim8/image/upload/v1523343799/jeans.jpg'));
      this.products.push(new Category('Jumpers & Cardigans', 'https://res.cloudinary.com/cediim8/image/upload/v1523343799/jumper-cardigans.jpg'));
      this.products.push(new Category('Loungewear', 'https://res.cloudinary.com/cediim8/image/upload/v1523343799/lounge-waer.jpg'));
      this.products.push(new Category('Multipacks', 'https://res.cloudinary.com/cediim8/image/upload/v1523343799/myltipacks.jpg'));
      this.products.push(new Category('Pants & Chinos', 'https://res.cloudinary.com/cediim8/image/upload/v1523343800/pants-chinos.jpg'));
      this.products.push(new Category('Shirts', 'https://res.cloudinary.com/cediim8/image/upload/v1523343800/shirts.jpg'));
      this.products.push(new Category('Shorts', 'https://res.cloudinary.com/cediim8/image/upload/v1523343800/shorts.jpg'));
      this.products.push(new Category('Socks', 'https://res.cloudinary.com/cediim8/image/upload/v1523343800/socks.jpg'));
      this.products.push(new Category('Suits', 'https://res.cloudinary.com/cediim8/image/upload/v1523343800/sutis.jpg'));
      this.products.push(new Category('Swimwear', 'https://res.cloudinary.com/cediim8/image/upload/v1523343800/swimwear.jpg'));
      this.products.push(new Category('T-Shirts & Singlets', 'https://res.cloudinary.com/cediim8/image/upload/v1523343801/t-shirts-singlets.jpg'));
      this.products.push(new Category('Tracksuits', 'https://res.cloudinary.com/cediim8/image/upload/v1523343800/tracksuits.jpg'));
      this.products.push(new Category('Underwear', 'https://res.cloudinary.com/cediim8/image/upload/v1523343800/underwear.jpg'));
    }
    else {
      this.products.push(new Category('New In', 'https://res.cloudinary.com/cediim8/image/upload/v1523414035/new-in-women-caetgory.jpg'));
      this.products.push(new Category('Coats and Jackets', 'https://res.cloudinary.com/cediim8/image/upload/v1523414035/coats-jackets-women.jpg'));
      this.products.push(new Category('Dresses', 'https://res.cloudinary.com/cediim8/image/upload/v1523414035/dresses-women.jpg'));
      this.products.push(new Category('Hoodies & Sweatshirts', 'https://res.cloudinary.com/cediim8/image/upload/v1523414035/hoodies-sweatshirt-women.jpg'));
      this.products.push(new Category('Jeans', 'https://res.cloudinary.com/cediim8/image/upload/v1523414035/jeans-women.jpg'));
      this.products.push(new Category('Jumpers & Cardigans', 'https://res.cloudinary.com/cediim8/image/upload/v1523414034/jumpers-cardigans-women.jpg'));
      this.products.push(new Category('Jumpsuits & Playsuits', 'https://res.cloudinary.com/cediim8/image/upload/v1523414034/jumpsuit-playsuit-women.jpg'));
      this.products.push(new Category('Lingerie & Nightwear', 'https://res.cloudinary.com/cediim8/image/upload/v1523414034/lingerie-nightwear.jpg'));
      this.products.push(new Category('Loungewear', 'https://res.cloudinary.com/cediim8/image/upload/v1523414034/loungewear-women.jpg'));
      this.products.push(new Category('Multipacks', 'https://res.cloudinary.com/cediim8/image/upload/v1523414034/multipacks-women.jpg'));
      this.products.push(new Category('Pants & Leggings', 'https://res.cloudinary.com/cediim8/image/upload/v1523414034/pants-leggins-women.jpg'));
      this.products.push(new Category('Shorts', 'https://res.cloudinary.com/cediim8/image/upload/v1523414034/shorts-women.jpg'));
      this.products.push(new Category('Skirts', 'https://res.cloudinary.com/cediim8/image/upload/v1523414034/skirts-women.jpg'));
      this.products.push(new Category('Socks & Tights', 'https://res.cloudinary.com/cediim8/image/upload/v1523414034/socks-tights-women.jpg'));
      this.products.push(new Category('Suits & Separates', 'https://res.cloudinary.com/cediim8/image/upload/v1523414034/suits-separates-women.jpg'));
      this.products.push(new Category('Swimwear & Beachwear', 'https://res.cloudinary.com/cediim8/image/upload/v1523414034/swimwear-women.jpg'));
      this.products.push(new Category('Tops', 'https://res.cloudinary.com/cediim8/image/upload/v1523414034/tops-women.jpg'));
    }
  }

  initialiseRanges() {
    if (this.isMenSelected) {
      this.ranges.push(new Category('Plus Size', 'https://res.cloudinary.com/cediim8/image/upload/v1523344208/plus-size.jpg'));
      this.ranges.push(new Category('Tall', 'https://res.cloudinary.com/cediim8/image/upload/v1523344207/tall-size.jpg'));
    }
    else {
      this.ranges.push(new Category('Curve & Plus Size', 'https://res.cloudinary.com/cediim8/image/upload/v1523414573/plus-size-women.jpg'));
      this.ranges.push(new Category('Maternity', 'https://res.cloudinary.com/cediim8/image/upload/v1523414573/meternity.jpg'));
      this.ranges.push(new Category('Petite', 'https://res.cloudinary.com/cediim8/image/upload/v1523414573/petite.jpg'));
      this.ranges.push(new Category('Tall', 'https://res.cloudinary.com/cediim8/image/upload/v1523414573/tall-women.jpg'));
    }
  }

  initialiseOccasions() {
    if (this.isMenSelected) {
      this.occasions.push(new Category('AUTUMN', 'https://res.cloudinary.com/cediim8/image/upload/v1523344207/autum.jpg'));
      this.occasions.push(new Category('WEDDINGS', 'https://res.cloudinary.com/cediim8/image/upload/v1523344207/wedding.jpg'));
      this.occasions.push(new Category('WORKWEAR', 'https://res.cloudinary.com/cediim8/image/upload/v1523344207/workwear.jpg'));
      this.occasions.push(new Category('GOING OUT-OUT', 'https://res.cloudinary.com/cediim8/image/upload/v1523344207/goingout.jpg'));
      this.occasions.push(new Category('HOLIDAY', 'https://res.cloudinary.com/cediim8/image/upload/v1523344207/holiday.jpg'));
      this.occasions.push(new Category('FESTIVAL', 'https://res.cloudinary.com/cediim8/image/upload/v1523344207/festival.jpg'));
    }
    else {
      this.occasions.push(new Category('AUTUMN', 'https://res.cloudinary.com/cediim8/image/upload/v1523414572/autumn-women.jpg'));
      this.occasions.push(new Category('WEDDINGS', 'https://res.cloudinary.com/cediim8/image/upload/v1523414572/wedding-women.jpg'));
      this.occasions.push(new Category('WORKWEAR', 'https://res.cloudinary.com/cediim8/image/upload/v1523414572/workwear-women.jpg'));
      this.occasions.push(new Category('GOING OUT-OUT', 'https://res.cloudinary.com/cediim8/image/upload/v1523414572/going-out-women.jpg'));
      this.occasions.push(new Category('HOLIDAY', 'https://res.cloudinary.com/cediim8/image/upload/v1523414572/holiday-women.jpg'));
      this.occasions.push(new Category('FESTIVAL', 'https://res.cloudinary.com/cediim8/image/upload/v1523414572/festival-women.jpg'));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  goToSavedItems() {
    this.navCtrl.push('SavedItemsPage');
  }

  goToProducts(category: Category) {
    var navParams = { 
      category: category, 
      isMenSelected: this.isMenSelected
    };

    this.navCtrl.push('ProductsPage', navParams);
  }
}

export class Category {
  constructor(name: string, picture: string) {
    this.name = name;
    this.picture = picture;
  }

  name: string;
  picture: string;
}
