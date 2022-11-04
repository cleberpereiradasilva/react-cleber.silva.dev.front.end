import { ComponentStory, ComponentMeta } from '@storybook/react';
import { H4 } from '../H4';

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
    <H4>Quem?</H4>,
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est tempor, ipsum eget sit. Semper phasellus non varius et </Text>
  ]
};

export const BigNumber = Template.bind({});
BigNumber.args = {
  align: 'right', 
  
  children: [
    <H4>Clientes</H4>,
    <H4>Atendidos</H4>,
    <Text size ='big'>8</Text>
  ]
};



