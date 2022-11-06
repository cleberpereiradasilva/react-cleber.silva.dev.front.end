import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  Card } from '../Card';

export default {
  title: 'Card/Card',
  component: Card,
} as ComponentMeta<typeof  Card>;

const Template: ComponentStory<typeof  Card> = (args) => < Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'It`s all ok',
};

