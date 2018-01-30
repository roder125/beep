import { Profile } from './../../models/profile/profile.interface';


const userList: Profile[] = [
    { firstName: "Roderick", lastName: "Schüssler", email: "rschuessler@bla.com", avatar: "leer", dateOfBirth: new Date()},
    { firstName: "Lea", lastName: "Grammbusch", email: "lea@bla.com", avatar: "leer", dateOfBirth: new Date()},
    { firstName: "Lisa", lastName: "Schröder", email: "lisa@bla.com", avatar: "leer", dateOfBirth: new Date()},
    { firstName: "Nils", lastName: "Schneider", email: "schneider@bla.com", avatar: "leer", dateOfBirth: new Date()}
];

export const USER_LIST = userList;