import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  H1 } from '../H1';

export default {
  title: 'TypoGraphy/H1',
  component: H1,
} as ComponentMeta<typeof  H1>;

const Template: ComponentStory<typeof  H1> = (args) => < H1 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: [
    <p>Oi, sou 
    <strong> Cleber Silva</strong><br/>
    Desenvolvedor FullStack</p>
  ]
};

