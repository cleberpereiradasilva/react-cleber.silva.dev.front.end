import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  H2 } from '../H2';

export default {
  title: 'TypoGraphy/H2',
  component: H2,
} as ComponentMeta<typeof  H2>;

const Template: ComponentStory<typeof  H2> = (args) => < H2 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Quem?',
};

