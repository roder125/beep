import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';
import { EditProfileFormComponent } from './edit-profile-form';


@NgModule({
    declarations: [
        EditProfileFormComponent,
    ],
    imports: [
        IonicPageModule.forChild(EditProfileFormComponent),
    ],
    exports: [
        EditProfileFormComponent
    ]
})
export class EditProfileFormComponentModule {}