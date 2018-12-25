import {computed, observable} from "mobx";
import {ContactSexType, IContactType} from "../../types/ContactType";

export class ContactsStore {
  @observable public all: IContactType[] = [
    {id: 1, name:"name1", email: "q1@q.q"},
    {id: 2, name:"name2", email: "q2@q.q"},
    {id: 3, name:"name3", email: "q3@q.q"}
  ];

  @observable public prefix:string = "mr.";
  @observable public sex: ContactSexType = ContactSexType.FEMALE;

  @computed get amount() {
    return this.all.length;
  }

  public changeSex(value:ContactSexType) {
    this.sex = value;
    this.updateState();
  }

  private updateState() {
    this.prefix = this.sex===ContactSexType.MALE?"ms.":"mr.";
  }
}

export const contactsStore = new ContactsStore();