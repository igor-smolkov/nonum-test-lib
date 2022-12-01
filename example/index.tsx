import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Disc, DiscContainer, Thing } from '../.';

const App = () => {
  return (
    <div>
      <Thing text="3432423432432d" />
      <Disc colors={[1,1,1,0,3,1,1,1]} isAnimate />
      <DiscContainer id="DE7cveszeBsgQQJdUcKnzvmNihdkhfyhDXJ49VzmwN9p" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
