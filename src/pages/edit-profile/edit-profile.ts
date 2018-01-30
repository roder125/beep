import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  saveProfileResult(event: Boolean){
    event ? this.navCtrl.setRoot("TabsPage") : console.log("Not authenticated or saved");
  }

}
