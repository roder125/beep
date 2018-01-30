import { Profile } from './../../models/profile/profile.interface';
import { Message } from './../../models/messages/message.interface';
import { USER_LIST } from '../profiles/profiles';

const userList = USER_LIST;
const messageList: Message[] = [];

userList.forEach(user => {
    messageList.push({ user: user, date: new Date(), lastMessage: "Hallo" })
})


export const MESSAGE_LIST = messageList;