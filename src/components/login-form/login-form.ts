import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  text: string;

  constructor(private navCtrl: NavController) {

  }

  navigateToPage(pageName: string){
    pageName === "TabsPage" ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
