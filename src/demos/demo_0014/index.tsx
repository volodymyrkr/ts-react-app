import * as React from "react";
import ContactsList from "./components/ContactsList";
import * as contactsStore from "./stores/ContactsStore";

export default class Demo0014 extends React.Component {
  public render(): React.ReactNode {
    return (
      <ContactsList contactsStore={contactsStore}/>
    );
  }
}