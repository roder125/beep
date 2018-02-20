import { User } from 'firebase/app';
import { AuthService } from './../../providers/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from './../../providers/data/data.service';
import { Profile } from './../../models/profile/profile.interface';
import { Component, OnDestroy, EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnDestroy {
  
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  @Output() saveProfileResult: EventEmitter<Boolean>;

  @Input() profile: Profile;

  constructor(private data: DataService, private auth: AuthService) {

    this.saveProfileResult = new EventEmitter<Boolean>();

    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User)=>{
      this.authenticatedUser = user;
    })
  }

  async saveProfile(){
    if(this.authenticatedUser){
      this.profile.email = this.authenticatedUser.email;
      const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
      this.saveProfileResult.emit(result);
    }    
  }

  ngOnDestroy(): void {
      this.authenticatedUser$.unsubscribe();
    }

}
