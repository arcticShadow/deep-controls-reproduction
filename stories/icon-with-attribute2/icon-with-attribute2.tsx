import classNames from 'classnames';
import React from 'react';
import { Icon, IIconProps } from '../icons/icon';
import './icon-with-attribute2.scss';

export interface IIconAttribute extends React.ComponentProps<'span'> {
  /**
   * Set icon name
   *
   * @default undefined
   */
  icon?: IIconProps;

  /**
   * Set additional child elements
   */
  children?: React.ReactNode;

  /**
   * Set icon location (left or right)
   *
   * @default IconLocation.Left
   */
  iconLocation?: IconLocation;
}

export enum IconLocation {
  Left = 'left',
  Right = 'right',
}

/**
 * The Stories of this component do not define `icon` and as such, there is no icon control in the argTypes at all. 
 */
export const IconWithAttribute = ({
  icon,
  children,
  iconLocation = IconLocation.Left,
  className,
  ...props
}: IIconAttribute) => {
  return (
    <span
      className={classNames(
        'acpl-icon-with-attribute',
        iconLocation,
        className
      )}
      {...props}
    >
      {icon && iconLocation == IconLocation.Left && (
        <>
          <Icon {...icon}></Icon>
        </>
      )}
        {children}
      {icon && iconLocation == IconLocation.Right && (
        <>
          <Icon {...icon}></Icon>
        </>
      )}
    </span>
  );
};
