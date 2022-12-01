import * as React from 'react';

// Delete me
type P = {
  text: string;
}

export const Thing: React.FC<P> = ({text}) => {
  return <div>the snoz000000sdries taste like {text}snozzberries</div>;
};

export * from './Disc/index';
export * from './DiscContainer/index';
