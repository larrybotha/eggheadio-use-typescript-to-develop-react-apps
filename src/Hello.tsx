import * as React from 'react';

const Hello = (props: {compiler: string; framework: string}) => {
  return (
    <div>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
    </div>
  );
};

export default Hello;
