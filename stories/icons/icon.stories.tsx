import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { icons } from './icons.json';
import { Icon, IconBorderType, IconRotation } from './icon';

const argTypeIconMapping = icons.reduce<Record<string, string>>(
  (collector, { title, cssClass }) => {
    collector[cssClass] = title;
    return collector;
  },
  {}
);

const meta: Meta<typeof Icon> = {
  title: 'Components/Core/Icons/Icon',
  component: Icon,
  parameters: {
    
  },
  argTypes: {
    icon: {
      control: { type: 'select', labels: argTypeIconMapping },
      options: Object.keys(argTypeIconMapping),
    },
    rotation: {
      table: {
        defaultValue: {
          detail: `Will use \`${IconRotation.Upright}\` as the default value`,
        },
      },
    },
    borderType: {
      table: {
        defaultValue: {
          detail: `Will use \`${IconBorderType.None}\` as the default value`,
        },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const StandardIcon: Story = {
  args: {
    icon: 'weather-wind',
  },
};

export const RotatedIcon: Story = {
  args: {
    icon: 'weather-sunset',
    rotation: IconRotation.Deg180,
  },
};

export const IconWithCustomColor: Story = {
  args: {
    icon: 'weather-sunny',
    color: 'red',
  },
};

export const IconWithBoxBorder: Story = {
  args: {
    icon: 'weather-rain',
    borderType: IconBorderType.Boxed,
  },
};

export const IconWithCircleBorder: Story = {
  args: {
    icon: 'weather-cloud',
    borderType: IconBorderType.Circled,
  },
};

export const IconInlineWithText: StoryFn<typeof Icon> = (args) => (
  <>
    <div style={{ fontSize: 16 }}>
      <Icon {...args}></Icon>This icon matches the font size
    </div>
    <div style={{ fontSize: 24 }}>
      <Icon {...args}></Icon>This icon matches the font size
    </div>
    <div style={{ fontSize: 35 }}>
      <Icon {...args}></Icon>This icon matches the font size
    </div>
  </>
);
IconInlineWithText.args = {
  icon: 'circle',
  className: 'inline',
};
IconInlineWithText.parameters = {};

