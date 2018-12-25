import * as React from "react";
import ContactsList from "./components/ContactsList";
import {contactsStore} from "./stores/ContactsStore";

export default class Demo0014 extends React.Component {
  public componentWillMount(): void {
    setTimeout(()=>{
      contactsStore.prefix = "ms...";
    }, 5000);
  }

  public render(): React.ReactNode {
    return (
      <ContactsList contactsStore={contactsStore}/>
    );
  }
}