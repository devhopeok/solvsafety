import { Component } from '@angular/core';
import { NavController, PopoverController, Events, MenuController, NavParams, ToastController, AlertController, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions} from '@ionic-native/camera';

@Component({
  selector: 'page-form-fill',
  templateUrl: 'form-fill.html'
})
export class FormFillPage {
  module = {icon: '', name: ''};
  report = {
    date: '',
    time: '',
    type: '',
    description: '',
    imageUri: '',
  }
  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public events: Events,
    public menuCtrl: MenuController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    public camera: Camera) {
      this.module = this.navParams.get('module');
  }

  onSave() {
    if (this.report.date == '') {
      this.presentToast(this.module.name + " Date is required.");
      return;
    } else if (this.report.time == '') {
      this.presentToast(this.module.name + " Time is required.");
      return;
    } else if (this.report.type == '') {
      this.presentToast(this.module.name + " Type is required");
      return;
    }

    let alert = this.alertCtrl.create({
      title: 'Success!',
      message: this.module.name + ' report form has been saved successfully',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  onCancel() {
    let alert = this.alertCtrl.create({
      title: '',
      message: 'Do you really want to cancel this report?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            
          }
        },
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  onAddPhoto() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Take the Photo',
          handler: () => {
            this.takePhoto(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'From Image Gallery',
          handler: () => {
            this.takePhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Cancel',
          role: 'destructive',
          handler: () => {
            
          }
        }
      ]
    });
 
    actionSheet.present();
  }

  takePhoto(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType
    }
    
    this.camera.getPicture(options).then((imageData) => {
      this.report.imageUri = imageData;
    }, (err) => {
     // Handle error
    });
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {

    });
  
    toast.present();
  }
}
