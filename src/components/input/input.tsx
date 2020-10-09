import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Input: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Input</>;
  };

  export default Input;