import * as React from 'react';
import {render} from 'react-dom';

import Hello from './Hello';

render(
  <Hello compiler="Typescript" framework="React" />,
  document.getElementById('root')
);
