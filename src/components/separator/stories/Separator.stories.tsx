import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  Separator } from '../Separator';

export default {
  title: 'Separator/Separator',
  component: Separator,
} as ComponentMeta<typeof  Separator>;

const Template: ComponentStory<typeof  Separator> = (args) => < Separator {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Especialidades',
};

