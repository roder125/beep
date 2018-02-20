import { ProfileSearchComponent } from './profile-search';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';



@NgModule({
    declarations: [
        ProfileSearchComponent,
    ],
    imports: [
        IonicPageModule.forChild(ProfileSearchComponent),
    ],
    exports: [
        ProfileSearchComponent
    ]
})
export class ProfileSearchComponentModule {}