import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  Item } from '../Item';
export default {
  title: 'Menu/Item/Item',
  parameters: {
    previewTabs: {
        canvas: { hidden: true},
    },
    viewMode: 'docs',
    docs: {
        previewSource: 'open'
    },
    
  },
  component: Item,
} as ComponentMeta<typeof  Item>;

const Template: ComponentStory<typeof  Item> = (args) => <Item {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Quem sou eu',
  active: false, 
  href: '#'
};

