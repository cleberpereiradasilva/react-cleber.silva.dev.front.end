import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  Text } from '../Text';

export default {
  title: 'TypoGraphy/Text',
  component: Text,
} as ComponentMeta<typeof  Text>;

const Template: ComponentStory<typeof  Text> = (args) => < Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Est tempor, ipsum eget sit. Semper phasellus non varius et `,
};

