import React from 'react';
import Proptypes from 'prop-types';
import { Wrapper } from './styles';
// import { Container } from './styles';

export default function AuthLayout( {children}) {
  return (
    <Wrapper>{children}</Wrapper>
  );
}

AuthLayout.propTypes = {
  children: Proptypes.element.isRequired,
}
