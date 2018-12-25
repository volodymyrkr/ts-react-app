import {observer} from "mobx-react";
import * as React from "react";
import {ContactsStore} from "../../stores/ContactsStore";

interface IProps {
  contactsStore: ContactsStore
}
@observer
export default class ContactsList extends React.Component<IProps> {
  public render(): React.ReactNode {
    console.log(this.props);
      return (
        <div className="contacts-list">
          <div>HEADER</div>
          <div className="contacts-list-wrapper">
            {

            }
          </div>
        </div>
      );
  }
}