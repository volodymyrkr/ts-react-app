import {computed, observable} from "mobx";
import {ContactSexType, IContactType} from "../../types/ContactType";

export class ContactsStore {
  @observable public all: IContactType[] = [
    {id: 1, name:"name1", email: "q1@q.q"},
    {id: 2, name:"name2", email: "q2@q.q"},
    {id: 3, name:"name3", email: "q3@q.q"}
  ];

  @observable private sex: ContactSexType = ContactSexType.FEMALE;

  @computed get amount() {
    return this.all.length;
  }

  @computed get prefix() {
    return this.sex===ContactSexType.MALE?"ms.":"mr.";
  }

  public changeSex(value:ContactSexType) {
    this.sex = value;
  }
  public addContact(name:string, email:string):number {
    const newId:number = this.all[this.all.length-1].id+1;
    this.all.push({
      email,
      id: newId,
      name
    });
    return newId;
  }
}

export const contactsStore = new ContactsStore();