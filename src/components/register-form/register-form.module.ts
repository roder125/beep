import { RegisterFormComponent } from './register-form';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';



@NgModule({
    declarations: [
        RegisterFormComponent,
    ],
    imports: [
        IonicPageModule.forChild(RegisterFormComponent),
    ],
    exports: [
        RegisterFormComponent
    ]
})
export class RegisterFormComponentModule {}