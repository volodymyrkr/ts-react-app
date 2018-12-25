import {observer} from "mobx-react";
import * as React from "react";
import {ContactsStore} from "../../stores/ContactsStore";

interface IProps {
  contactsStore: ContactsStore
}

@observer
export default class ContactsList extends React.Component<IProps> {
  public render(): React.ReactNode {
    return (
      <div className="contacts-list">
        <div>HEADER {this.props.contactsStore.amount}</div>
        <div className="contacts-list-wrapper">
          {
            this.props.contactsStore.all.map((item, index) => {
              return (
                <li key={index}>{this.props.contactsStore.prefix}{item.name}</li>
              )
            })
          }
        </div>
      </div>
    );
  }
}