import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Item, Nav } from '../';

export default {
  title: 'Menu/Nav',
  component: Nav,
  argTypes: {
    children: {
      control: false,
    }, 
  }
} as ComponentMeta<typeof  Nav>;

const Template: ComponentStory<typeof  Nav> = (args) => < Nav {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: [
      <Item active href='#'>Quem sou eu</Item>,
      <Item href='#'>Post & Artigos</Item>,
      <Item href='#'>Contato</Item>
  ]
};

