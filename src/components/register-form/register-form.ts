import { AuthService } from './../../providers/auth/auth.service';
import { Account } from './../../models/account/account.interface';
import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { LoginResponse } from '../../models/login/login-response.interface';

@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  account = {} as Account;

  @Output() registerStatus: EventEmitter<LoginResponse>;

  constructor(private auth: AuthService, private navCtrl: NavController) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  async register(){
    try{
      const result = 
      await this.auth.createUserWithEmailAndPassword(this.account);
      this.registerStatus.emit(result);
    }
    catch(e){
      console.error(e);
      this.registerStatus.emit(e);
    }
  }

}
