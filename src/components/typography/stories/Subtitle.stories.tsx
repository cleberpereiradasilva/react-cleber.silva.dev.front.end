import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  Subtitle } from '../Subtitle';

export default {
  title: 'Typography/Subtitle',
  component: Subtitle,
} as ComponentMeta<typeof  Subtitle>;

const Template: ComponentStory<typeof  Subtitle> = (args) => < Subtitle {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'It`s all ok',
};

