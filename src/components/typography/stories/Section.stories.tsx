import { ComponentStory, ComponentMeta } from '@storybook/react';
import { H2 } from '../H2';

import {  Section } from '../Section';
import { Text } from '../Text';

export default {
  title: 'Typography/Section',
  component: Section,
} as ComponentMeta<typeof  Section>;

const Template: ComponentStory<typeof  Section> = (args) => < Section {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: [
    <H2>Quem?</H2>,
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est tempor, ipsum eget sit. Semper phasellus non varius et </Text>
  ]
};

