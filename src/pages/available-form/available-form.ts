import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { AddActionPage } from '../add-action/add-action';

@Component({
  selector: 'page-available-form',
  templateUrl: 'available-form.html'
})
export class AvailableFormPage {

  activeForms = [
    {type: 'Action', icon: 'options'},
    {type: 'Hazard', icon: 'eye'},
    {type: 'Incident', icon: 'warning'},
    {type: 'Vehicle Inspection', icon: 'car'},
    {type: 'Workshop Inspection', icon: 'albums'},
   ];

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  onClose() {

  }

  onSelectForm(item) {
    this.navCtrl.push('AddActionPage');
  }
}
