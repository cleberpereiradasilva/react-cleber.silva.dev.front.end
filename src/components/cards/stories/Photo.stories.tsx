import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  Photo } from '../Photo';

export default {
  title: 'Cards/Photo',
  component: Photo,
} as ComponentMeta<typeof  Photo>;

const Template: ComponentStory<typeof  Photo> = (args) => < Photo {...args} />;

export const Default = Template.bind({});

Default.args = {
  images: [
    '../../photos/9.jpeg',
    '../../photos/10.jpeg',
    '../../photos/7.jpeg',
  ]

};

