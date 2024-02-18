import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';


const config : StorybookConfig = {
  stories: [
    "../docs/**/*.mdx", 
    "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  addons: [
    "@storybook/addon-links", 
    {
      name: "@storybook/addon-essentials", 
      options: {
        docs: false,
      }
    },
    {
      name: '@storybook/addon-docs',
      options: {

       
      },
  },
    "@storybook/addon-interactions",
    '@storybook/addon-a11y', 
    '@whitespace/storybook-addon-html', 
    'storybook-addon-themes', 
    'storybook-addon-pseudo-states', 
    'storybook-addon-deep-controls',
  ],
  staticDirs: [ '../public'],
  framework: {
    name: '@storybook/react-vite',
    options: {builder: {}}
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        if(prop.name === 'className') {
          return true
        }
        return prop.parent ? !/node_modules((?!@vidstack).)*$/.test(prop.parent.fileName) : true;
      },
      compilerOptions: {}
    }
  },
  docs: {
    autodocs: true, 
    defaultName: 'Guidelines',
  }, 
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return  mergeConfig(config, {
      // Add dependencies to pre-optimization
     build : {
       assetsDir : '',
       cssCodeSplit : false,
      },
      css: {}
    });
  },
  
};

export default config;
