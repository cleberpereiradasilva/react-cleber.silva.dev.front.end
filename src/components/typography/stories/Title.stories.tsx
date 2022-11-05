import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  Title } from '../Title';

export default {
  title: 'Typography/Title',
  component: Title,
} as ComponentMeta<typeof  Title>;

const Template: ComponentStory<typeof  Title> = (args) => < Title {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Titulo do trabalho',
};

