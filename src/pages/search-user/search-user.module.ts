import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchUserPage } from './search-user';
import { ProfileSearchComponentModule } from '../../components/profile-search/profile-search.component.module';

@NgModule({
  declarations: [
    SearchUserPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchUserPage),
    ProfileSearchComponentModule
  ],
})
export class SearchUserPageModule {}
