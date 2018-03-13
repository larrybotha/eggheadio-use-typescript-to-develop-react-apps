import * as React from 'react';
import {render} from 'react-dom';

type AppProps = {message: string};
type AppState = {count: number};

// In typescript React.Component takes 2 annotations,
// the first for props, and the second for state
// class App extends React.Component<{message: string}, {count: number}> {
// Annotations can also be abstracted using the 'type' keyword
class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);

    this.state = {count: 0};
  }

  handleIncrement = () => {
    this.setState(({count}) => ({count: count + 1}));
  };

  render() {
    const {message} = this.props;
    const {count} = this.state;

    return (
      <div onClick={this.handleIncrement}>
        {message} {count}
      </div>
    );
  }
}

render(<App message="hello world" />, document.getElementById('root'));
