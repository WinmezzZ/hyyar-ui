import React from 'react';
import { Props } from './interface';

const Button: React.FC<Props> = props => {
  return <button {...props}></button>;
};

export default Button;
