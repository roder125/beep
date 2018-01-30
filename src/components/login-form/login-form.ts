import { AuthService } from './../../providers/auth/auth.service';
import { LoginResponse } from './../../models/login/login-response.interface';
import { Account } from './../../models/account/account.interface';
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

  constructor(private navCtrl: NavController,private auth: AuthService) {
    this.loginStatus = new EventEmitter<LoginResponse>();

  }

  navigateToRegisterPage(){
    this.navCtrl.push("RegisterPage");
  }

  async login(){
    const result = await this.auth.signInWithEmailAndPassword(this.account);
    this.loginStatus.emit(result);
  }
}
