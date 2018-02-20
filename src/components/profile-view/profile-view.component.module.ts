import { ProfileViewComponent } from './profile-view';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';



@NgModule({
    declarations: [
        ProfileViewComponent,
    ],
    imports: [
        IonicPageModule.forChild(ProfileViewComponent),
    ],
    exports: [
        ProfileViewComponent
    ]
})
export class ProfileFormComponentModule {}