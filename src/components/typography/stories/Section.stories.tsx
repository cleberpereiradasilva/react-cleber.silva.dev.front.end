import { ComponentStory, ComponentMeta } from '@storybook/react';
import { H2 } from '../H2';

import {  Section } from '../Section';
import { Text } from '../Text';

export default {
  title: 'Typography/Section',
  component: Section,
  argTypes: { 
    align: { control: 'select', options: ['right', 'left'] },
    children: { control: false }
  }
} as ComponentMeta<typeof  Section>;

const Template: ComponentStory<typeof  Section> = (args) => < Section {...args} />;

export const Default = Template.bind({});

Default.args = {
  align: 'left', 
  children: [
    <H2>Quem?</H2>,
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est tempor, ipsum eget sit. Semper phasellus non varius et </Text>
  ]
};

export const BigNumber = Template.bind({});
BigNumber.args = {
  align: 'right', 
  
  children: [
    <H2>Clientes</H2>,
    <H2>Atendidos</H2>,
    <Text size ='big'>8</Text>
  ]
};



