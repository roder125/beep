
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { RegisterFormComponentModule } from '../../components/register-form/register-form.module';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    RegisterFormComponentModule,
    AngularFireAuthModule
  ],
})
export class RegisterPageModule {}
