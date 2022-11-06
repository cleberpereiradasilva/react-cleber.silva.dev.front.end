import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Html } from 'components/icons';

import {  Technology } from '../Technology';

export default {
  title: 'Cards/Technology/Default',
  component: Technology,
  argTypes: {
    children: {
      control: false,
    }, 
  }
} as ComponentMeta<typeof  Technology>;

const Template: ComponentStory<typeof  Technology> = (args) => < Technology {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <Html />,
  description: 'Html & CSS'
};

