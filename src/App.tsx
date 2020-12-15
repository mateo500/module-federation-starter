import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import Source from './Source';

export const App = (): ReactElement => {
  return <Source name='test' />;
};

ReactDOM.render(<App />, document.getElementById('root'));
