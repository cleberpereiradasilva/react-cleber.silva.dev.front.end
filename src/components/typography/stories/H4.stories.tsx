import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  H4 } from '../H4';

export default {
  title: 'TypoGraphy/H4',
  component: H4,
} as ComponentMeta<typeof  H4>;

const Template: ComponentStory<typeof  H4> = (args) => < H4 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Quem?',
};

