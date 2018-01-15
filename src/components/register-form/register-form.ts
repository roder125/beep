import { Account } from './../../models/account/account.interface';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  account = {} as Account;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, private navCtrl: NavController) {
    
  }

  register(){
    try{
      const result = 
      this.afAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password)
        .then(data => {
          this.navCtrl.pop();
        });
      this.toast.create({
        message: "Account successfully created!",
        duration: 3000
      }).present();
    }
    catch(e){
      console.error(e);
      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
    }
  }

}
