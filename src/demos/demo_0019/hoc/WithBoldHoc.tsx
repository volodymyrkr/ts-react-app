import * as React from "react";
import {Component} from "react";

export function withBoldHoc(WrappedComponent: any) {
  return class BoldComponent extends Component {
    public render(): React.ReactNode {
      return (
        <div>
          <b>
            <WrappedComponent {...this.props}/>
          </b>
        </div>
      )
    }
  }
}
