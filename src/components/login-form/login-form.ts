import { LoginResponse } from './../../models/login/login-response.interface';
import { Account } from './../../models/account/account.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from 'ionic-angular';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  text: string;
  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private navCtrl: NavController, private afAuth: AngularFireAuth) {
    this.loginStatus = new EventEmitter<LoginResponse>();

  }

  navigateToRegisterPage(){
    this.navCtrl.push("RegisterPage");
  }

  async login(){
    try{
      const result : LoginResponse = {
        result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      }   
      this.loginStatus.emit(result);
    }
    catch(e){
      console.error(e);

      const error: LoginResponse = {
        error: e
      }

      this.loginStatus.emit(error);
    }
  }

}
