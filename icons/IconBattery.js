/* eslint-disable */
import React from 'react';
import Icon from './Icon';

const IconBattery = props => {
  const { iconWidth, iconHeight, ...rest } = props
  return (
    <Icon {...rest}>
      <svg version="1.1" viewBox="0 0 24 24" width={iconWidth || 16} height={iconHeight || 16}>
        <rect width="18" height="12" x="1" y="6" rx="2" ry="2"/><path d="M23 13v-2"/>
      </svg>
    </Icon>
  )
}

export default IconBattery