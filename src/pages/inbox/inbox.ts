import { Message } from './../../models/messages/message.interface';
import { MESSAGE_LIST } from './../../mocks/messages/messages';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  messageList: Message[] = MESSAGE_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.messageList);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

}
