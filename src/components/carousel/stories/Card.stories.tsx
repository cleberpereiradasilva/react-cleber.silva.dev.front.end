import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  Card } from '../Card';

export default {
  title: 'Carousel/Card',
  component: Card,
} as ComponentMeta<typeof  Card>;

const Template: ComponentStory<typeof  Card> = (args) => < Card {...args} />;

export const Default = Template.bind({});

Default.args =  {
  tag: 'Content Card 6',  
  title: 'Titulo do trabalho',
  href: '#',
  cover: 'https://www.receiteria.com.br/wp-content/uploads/cafe-cremoso-facil-0.jpg', 
}
