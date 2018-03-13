import * as React from 'react';

export class CheckboxWithLabel extends React.Component<
  {
    labelOn: string;
    labelOff: string;
  },
  {isChecked: boolean}
> {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
    };
  }

  handleChange = () => {
    this.setState(({isChecked}) => ({isChecked: !isChecked}));
  };

  render() {
    const {isChecked} = this.state;
    const {labelOn, labelOff} = this.props;

    return (
      <label htmlFor="checkbox">
        <input
          onChange={this.handleChange}
          checked={isChecked}
          id="checkbox"
          type="checkbox"
        />{' '}
        {isChecked ? labelOn : labelOff}
      </label>
    );
  }
}
