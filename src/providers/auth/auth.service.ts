import { LoginResponse } from './../../models/login/login-response.interface';
import { Account } from './../../models/account/account.interface';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(private auth: AngularFireAuth) {
    
  }

  async createUserWithEmailAndPassword(account: Account){
    try{
      return <LoginResponse>{
        result: await this.auth.auth.createUserWithEmailAndPassword(account.email, account.password)
      }
    }
    catch(e){
      return <LoginResponse>{
        error: e
      }
    }
  }

  async signInWithEmailAndPassword(account: Account){
    try{
      return <LoginResponse>{
        result: await this.auth.auth.signInWithEmailAndPassword(account.email, account.password)
      }
    }
    catch(e){
      return <LoginResponse> {
        error: e
      };      
    }
  }

}
