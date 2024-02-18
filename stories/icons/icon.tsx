import classNames from 'classnames';
import React from 'react';

import './icons.scss';

export interface IIconProps extends React.ComponentProps<'i'> {
  /**
   * Icon name
   */
  icon: string;
  /**
   * Icon rotation (90 degree intervals)
   *
   * @default IconRotation.Upright
   */
  rotation?: IconRotation;

  /**
   * Custom colour for the icon - can be #colour or rgb()
   *
   * @default undefined
   */

  color?: string;

  /**
   * Add a border to an icon
   *
   * @default IconBorderType.None
   */
  borderType?: IconBorderType;

  /**
   * Custom colour for border if set. (Will use css vars `--color-icon-border` or `--color-icon-color` if not set)
   *
   * @default undefined
   */
  borderColor?: string;

  /**
   * A "Border Type" must be set for background colour to take effect.
   *
   * (Icon will have transparent background if not set)
   *
   * @default undefined
   */
  backgroundColor?: string;

  /**
   * Pixel sizing for icons 1:1 width:height ratio
   *
   * Will fall back to sensible defaults from css if not set. Defaults will vary between `inline` and not `inline` icons
   *
   * @default undefined
   */
  size?: number;

  /**
   * Should the icon be displayed as a prohibited icon
   *
   * @default false
   */
  isProhibited?: boolean;
}

export enum IconRotation {
  Upright = 'Upright',
  Deg90 = '90 Degrees',
  Deg180 = '180 Degrees',
  Deg270 = '270 Degrees',
}

export enum IconBorderType {
  None = 'None',
  Circled = 'Circled',
  Boxed = 'Boxed',
}

/**
 * Icon component
 */
export const Icon = ({
  icon,
  rotation = IconRotation.Upright,
  color,
  borderType = IconBorderType.None,
  borderColor,
  backgroundColor,
  size,
  isProhibited = false,
  className,
  ...props
}: IIconProps) => {
  const wrapWithBorder = (innerHtml: React.ReactNode) => {
    const borderClass =
      borderType && borderType == IconBorderType.Circled
        ? 'acpl-icon-circled'
        : 'acpl-icon-boxed';
    return (
      <span className={borderClass} style={{ borderColor, backgroundColor }}>
        {innerHtml}
      </span>
    );
  };

  const iconWithProhibitLine = (innerHtml: React.ReactNode) => {
    return <span className="acpl-icon-prohibit">{innerHtml}</span>;
  };

  let iconContent = (
    <i
      className={classNames(
        'acpl-icon',
        icon,
        {
          'rot-90': rotation == IconRotation.Deg90,
          'rot-180': rotation == IconRotation.Deg180,
          'rot-270': rotation == IconRotation.Deg270,
          colored: color,
        },
        className
      )}
      style={{
        backgroundColor: color,
        ...(size ? { width: size + 'px', height: size + 'px' } : {}),
      }}
      {...props}
    ></i>
  );

  if (isProhibited) {
    iconContent = iconWithProhibitLine(iconContent);
  }

  if (borderType !== IconBorderType.None) {
    iconContent = wrapWithBorder(iconContent);
  }

  return iconContent;
};

export default Icon;
