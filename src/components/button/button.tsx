import React from 'react';
import { Props } from './interface';

const defaultProps: Props = {};

const Button: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <button {...props}>{userProps.children}</button>;
};

export default Button;
