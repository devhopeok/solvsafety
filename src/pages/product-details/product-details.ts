import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { ProductSizePopOverPage } from '../product-size-pop-over/product-size-pop-over';


@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  isLiked: boolean;
  isMenSelected: any;
  description: string = '';
  price: number = 0;
  photos: string[] = [];
  otherProducts: Product[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.isMenSelected = navParams.get('isMenSelected');

    if (this.isMenSelected) {
      this.initialiseManProductDetails();
    }
    else {
      this.initialiseWomanProductDetails();
    }
  }

  initialiseManProductDetails() {
    this.description = 'Lee Sherpa Rider Denim Jacket Mid Wash';
    this.price = 218;

    this.photos.push('https://res.cloudinary.com/cediim8/image/upload/v1523345058/product-details-1.jpg');
    this.photos.push('https://res.cloudinary.com/cediim8/image/upload/v1523345058/product-details-2.jpg');
    this.photos.push('https://res.cloudinary.com/cediim8/image/upload/v1523345058/product-details-3.jpg');
    this.photos.push('https://res.cloudinary.com/cediim8/image/upload/v1523345058/product-details-4.jpg');

    this.otherProducts.push(new Product('Pull&Bear Denim Jacket In Black', 'https://res.cloudinary.com/cediim8/image/upload/v1523344614/product-1.jpg', 40, 30));
    this.otherProducts.push(new Product('Liquor N Poker Oversized Denim Jacket Stonewas', 'https://res.cloudinary.com/cediim8/image/upload/v1523344614/product-2.jpg', 89, 79));
    this.otherProducts.push(new Product('Puma T7 Vintage Track Jacket In White 57498506', 'https://res.cloudinary.com/cediim8/image/upload/v1523344614/product-3.jpg', 110, 99));
    this.otherProducts.push(new Product('New Look Cotton Bomber Jacket In Burgundy', 'https://res.cloudinary.com/cediim8/image/upload/v1523344614/product-8.jpg', 50, 35));
  }
  
  initialiseWomanProductDetails() {
    this.description = 'ASOS Cotton Mini Shirt Dress';
    this.price = 40;

    this.photos.push('https://res.cloudinary.com/cediim8/image/upload/v1523417552/product-details-women-1.jpg');
    this.photos.push('https://res.cloudinary.com/cediim8/image/upload/v1523417552/product-details-2-women.jpg');
    this.photos.push('https://res.cloudinary.com/cediim8/image/upload/v1523417552/product-details-3-women.jpg');
    this.photos.push('https://res.cloudinary.com/cediim8/image/upload/v1523417552/product-details-4-women.jpg');

    this.otherProducts.push(new Product('Stradivarius Polka Dot Shirt Dress', 'https://res.cloudinary.com/cediim8/image/upload/v1523415018/women-product-2', 40, 30));
    this.otherProducts.push(new Product('ASOS Ultimate Rolled Sleeve T-Shirt Dress With Tab', 'https://res.cloudinary.com/cediim8/image/upload/v1523415018/women-product-3', 30, 25));
    this.otherProducts.push(new Product('Boohoo One Shoulder Floral Midi Dress', 'https://res.cloudinary.com/cediim8/image/upload/v1523415018/women-product-4', 40, 30));
    this.otherProducts.push(new Product('Boohoo Off Shoulder Lemon Print Dress', 'https://res.cloudinary.com/cediim8/image/upload/v1523415018/women-product-5', 44, 40));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

  sizePopOver(myEvent) {
    let popover = this.popoverCtrl.create(ProductSizePopOverPage);

    popover.present({
      ev: myEvent
    });
  }

  likeUnlike() {
    this.isLiked = !this.isLiked;
  }
}

export class Product {
  constructor(name: string, picture: string, price: number, discountPrice: number) {
    this.name = name;
    this.picture = picture;
    this.price = price;
    this.discountPrice = discountPrice;
  }

  name: string;
  picture: string;
  price: number;
  discountPrice: number;
}