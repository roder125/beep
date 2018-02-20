import { Component, OnInit} from '@angular/core';
import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import { LoadingController, Loading } from 'ionic-angular';

@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent implements OnInit{

  userProfile: Profile;

  loader: Loading;

  constructor(private loading: LoadingController,private data: DataService, private auth: AuthService) {
    this.loader = this.loading.create({
      content: "Loading profile..."
    });
  }

  ngOnInit(){
    this.loader.present();
    this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.data.getProfile(user).valueChanges().subscribe((profile) => {
        this.userProfile = <Profile>profile;
        this.loader.dismiss();
      })
    })
  }

}
