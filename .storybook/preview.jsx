import {Controls, Description, Primary, Stories, Subtitle, Title} from '@storybook/blocks';

/**
 * parameters for storybook
 * 
 * @type import("@storybook/react").Preview['parameters']
 */
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <Controls />
        <Stories />
      </>
    )
  }
}
