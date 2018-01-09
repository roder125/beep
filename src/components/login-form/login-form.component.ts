import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  text: string;

  constructor(private navCtrl: NavController) {
    console.log('Hello LoginFormComponent Component');
    this.text = 'Hello World';
  }
  navigateToPage(pageName: string){
    pageName === "TabsPage" ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
