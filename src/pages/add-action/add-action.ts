import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
// import { GlobalProvider} from '../../providers/global/global';

@Component({
  selector: 'add-action',
  templateUrl: 'add-action.html'
})
export class AddActionPage {

  activeForms = [
    {type: 'Action', icon: 'options'},
    {type: 'Hazard', icon: 'eye'},
    {type: 'Incident', icon: 'warning'},
    {type: 'Vehicle Inspection', icon: 'car'},
    {type: 'Workshop Inspection', icon: 'albums'},
   ];

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController) {
      
  }

  onDraw() {
  }
}
