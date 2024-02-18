import { Meta, StoryObj } from '@storybook/react';
import { IconLocation, IconWithAttribute } from './icon-with-attribute';


const meta: Meta<typeof IconWithAttribute> = {
  title: 'Components/Core/Icons/Icon Attribute1',
  component: IconWithAttribute,
  parameters: {
    
    deepControls: { enabled: true },
  },
  argTypes: {
    iconLocation: {
      if: { arg: 'icon', truthy: true },
      table: {
        defaultValue: {
          detail: `Will use \`${IconLocation.Left}\` as default value`,
        },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof IconWithAttribute>;

export const iconWithAttributes: Story = {
  args: {
    icon: { icon: 'phone' },
    children: '555-1239',
  },
};
export const iconWithAttributesRichContent: Story = {
  args: {
    icon: { icon: 'phone' },
    children: '<b>(555)</b> 3226',
  },
};
export const iconWithAttributesReactNode: Story = {
  args: {
    icon: { icon: 'phone' },
    children: (
      <>
        <strong>555</strong> 4796
      </>
    ),
  },
};
export const iconWithAttributesNoChildren: Story = {
  args: {
    icon: { icon: 'phone' },
    children: undefined,
  },
};
