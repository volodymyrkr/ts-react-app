import * as React from 'react';

export const Counter: React.FunctionComponent<{value: number}> = (props) => (
  <div>
    Counter: {props.value}
  </div>
);