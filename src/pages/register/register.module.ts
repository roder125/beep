import { RegisterFormComponentModule } from './../../components/register-form/register-form.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    RegisterFormComponentModule
  ],
})
export class RegisterPageModule {}
