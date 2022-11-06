import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  Item } from '../Item';

export default {
  title: 'Menu/Item',
  component: Item,
 
} as ComponentMeta<typeof  Item>;

const Template: ComponentStory<typeof  Item> = (args) => < Item {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Quem sou eu',
  href:'#', 
  active: true
};

