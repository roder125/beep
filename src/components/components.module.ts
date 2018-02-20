import { IonicModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form';
import { RegisterFormComponent } from './register-form/register-form';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';
import { ProfileViewComponent } from './profile-view/profile-view';
import { ProfileSearchComponent } from './profile-search/profile-search';

@NgModule({
	declarations: [LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent],
	imports: [],
	exports: [LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent]
})
export class ComponentsModule {}
