import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-filter-multi-selection',
  templateUrl: 'filter-multi-selection.html',
})
export class FilterMultiSelectionPage {
  pageTitle: string;
  anySelection: boolean = false;
  multiSelectionItems: MultiSelectionItem[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
    this.pageTitle = navParams.get('selectionType');

    this.initialiseMultiSelectionItems();
  }

  initialiseMultiSelectionItems() {
    this.multiSelectionItems.push(new MultiSelectionItem('Blazers', 114));
    this.multiSelectionItems.push(new MultiSelectionItem('Bomber Jackets', 64));
    this.multiSelectionItems.push(new MultiSelectionItem('Coach Jackets', 451));
    this.multiSelectionItems.push(new MultiSelectionItem('Denim Jackets', 89));
    this.multiSelectionItems.push(new MultiSelectionItem('Overcoats', 154));
    this.multiSelectionItems.push(new MultiSelectionItem('Parkas', 547));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterMultiSelectionPage');
  }

  selectAll() {
    this.multiSelectionItems.forEach(item => {
      item.isSelected = true;
    });

    this.setAnySelection();
  }

  clearAll() {
    this.multiSelectionItems.forEach(item => {
      item.isSelected = false;
    });

    this.setAnySelection();
  }

  selectUnselectedItem(item: MultiSelectionItem) {
    item.isSelected = !item.isSelected;
    this.setAnySelection();
  }

  setAnySelection() {
    var hasAnySelected = false;

    for (var i = 0; i < this.multiSelectionItems.length; i++) {
      var item = this.multiSelectionItems[i];

      if (item.isSelected) {
        hasAnySelected = true;
        break;
      }
    }

    this.anySelection = hasAnySelected;
  }

  closeMultiSelection() {
    this.viewController.dismiss();
  }
}

export class MultiSelectionItem {
  constructor(name: string, count: number) {
    this.name = name;
    this.count = count;
  }

  isSelected: boolean;
  name: string;
  count: number;
}
