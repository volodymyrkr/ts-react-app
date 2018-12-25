import {observable} from "mobx";

export class ContactsStore {
  @observable public all: IContactType[] = [
    {id: 1, name:"name1", email: "q1@q.q"},
    {id: 2, name:"name2", email: "q2@q.q"},
    {id: 3, name:"name3", email: "q3@q.q"}
  ]
}

export default new ContactsStore();