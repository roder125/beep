import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { ProfileFormComponentModule } from '../../components/profile-view/profile-view.component.module';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    ProfileFormComponentModule
  ],
})
export class ProfilePageModule {}
