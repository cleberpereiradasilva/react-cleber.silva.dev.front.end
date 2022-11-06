import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  Carousel } from '../Carousel';

export default {
  title: 'Carousel/Carousel',
  component: Carousel,
} as ComponentMeta<typeof  Carousel>;

const Template: ComponentStory<typeof  Carousel> = (args) => < Carousel {...args} />;

export const Default = Template.bind({});
const contents = [{
    title: 'Content Card 1' 
  },
  {
    title: 'Content Card 2' 
  },
  {
    title: 'Content Card 3' 
  },
  {
    title: 'Content Card 4' 
  },
  {
    title: 'Content Card 5' 
  },
  {
    title: 'Content Card 6' 
  }
]

Default.args = {
  contents: contents
};

