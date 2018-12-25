import * as React from "react";
import ContactsList from "./components/ContactsList";
import {contactsStore} from "./stores/ContactsStore";
import {ContactSexType} from "./types/ContactType";

export default class Demo0014 extends React.Component {
  public componentWillMount(): void {
    setTimeout(()=>{
      contactsStore.changeSex(ContactSexType.MALE);
      contactsStore.addContact("Someone", "a1@a1.a1");
      contactsStore.addContact("SomeoneElse", "a2@a2.a2");
    }, 5000);
  }

  public render(): React.ReactNode {
    return (
      <ContactsList contactsStore={contactsStore}/>
    );
  }
}