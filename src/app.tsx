import * as React from 'react';
import {render} from 'react-dom';

import {CheckboxWithLabel} from './CheckboxWithLabel';

const App = () => <CheckboxWithLabel labelOn="on" labelOff="off" />;

render(<App />, document.getElementById('root'));
