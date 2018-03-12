import * as React from 'react';
import {render} from 'react-dom';

// when creating stateless functional components it's recommended to annotate
// components using the React.SFC interface
// React.SFC takes a generic argument allowing one to specify the type annotation
// for a component
// The way the annotation is defined here is called an 'inline annotation'
const App1: React.SFC<{message: string}> = ({message}) => <div>{message}</div>;

// Inline annotations can be moved out using type annotations:
type App2Props = {message: string};
const App2: React.SFC<App2Props> = ({message}) => <div>{message}</div>;

render(
  <div>
    <App1 message="hello world 1" />
    <App2 message="hello world 2" />
  </div>,
  document.getElementById('root')
);
