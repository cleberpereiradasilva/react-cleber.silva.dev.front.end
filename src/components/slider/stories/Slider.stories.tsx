import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  Slider } from '../Slider';

export default {
  title: 'Slider/Slider',
  component: Slider,
} as ComponentMeta<typeof  Slider>;

const Template: ComponentStory<typeof  Slider> = (args) => < Slider {...args} />;

export const Default = Template.bind({});

Default.args = {
  images: [
    '../../photos/9.jpeg',
    '../../photos/10.jpeg',
    '../../photos/7.jpeg',
  ]

};

