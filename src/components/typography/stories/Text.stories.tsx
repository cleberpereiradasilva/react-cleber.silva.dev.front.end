import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  Text } from '../Text';

export default {
  title: 'TypoGraphy/Text',
  component: Text,
  argTypes: { 
    size: { control: 'select', options: ['normal', 'big'] },
    children: { control: false }
  }
} as ComponentMeta<typeof  Text>;

const Template: ComponentStory<typeof  Text> = (args) => < Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: 'normal',
  children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Est tempor, ipsum eget sit. Semper phasellus non varius et `,
};

