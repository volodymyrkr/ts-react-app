import * as React from "react";
import './index.scss';

export default class Button extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className="button-wrapper">
        <svg className="button" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 241 121">
          <g className="button-graphic">
            <path className="button-graphic_background" d="M 239 23 Q 239 3 219 3 L 23 3 Q 3 3 3 23 L 3 99 Q 3 119 23 119 L 219 119 Q 239 119 239 99 L 239 23 Z"
            />
            <path stroke="#396" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round"
                  fill="none" d="M 23 3 L 219 3 Q 239 3 239 23 L 239 99 Q 239 119 219 119 L 23 119 Q 3 119 3 99 L 3 23 Q 3 3 23 3 Z"
            />
          </g>
        </svg>
      </div>
    );
  }
}
