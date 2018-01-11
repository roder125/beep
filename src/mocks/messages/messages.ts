import { User } from './../../models/user/user.interface';
import { Message } from './../../models/messages/message.interface';
import { USER_LIST } from '../users/users';

const userList = USER_LIST;
const messageList: Message[] = [];

userList.forEach(user => {
    messageList.push({ user: user, date: new Date(), lastMessage: "Hallo" })
})


export const MESSAGE_LIST = messageList;