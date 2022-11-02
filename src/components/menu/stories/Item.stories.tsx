import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  Item } from '../Item';

export default {
  title: 'Item/Item',
  component: Item,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof  Item>;

const Template: ComponentStory<typeof  Item> = (args) => < Item {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Quem sou eu',
  href:'#', 
  active: true
};

