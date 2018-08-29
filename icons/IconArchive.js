/* eslint-disable */
import React from 'react';
import Icon from './Icon';

const IconArchive = props => (
  <Icon {...props}>
    <svg version="1.1" viewBox="0 0 24 24" width={props.iconWidth || 16 + 'px'} height={props.iconHeight || 16 + 'px'}>
      <path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4"/>
    </svg>
  </Icon>
)

export default IconArchive