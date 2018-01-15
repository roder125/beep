import { Account } from './../../models/account/account.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  text: string;
  account = {} as Account;

  constructor(private navCtrl: NavController, private afAuth: AngularFireAuth) {

  }

  navigateToPage(pageName: string){
    pageName === "TabsPage" ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

  async login(){
    try{
      const reult = 
      await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
        .then(data => {
          this.navCtrl.setRoot("TabsPage");
        });
    }
    catch(e){
      console.error(e);
    }
  }

}
