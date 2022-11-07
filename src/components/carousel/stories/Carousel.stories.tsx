import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  Carousel } from '../Carousel';

export default {
  title: 'Carousel/Carousel',
  component: Carousel,
} as ComponentMeta<typeof  Carousel>;

const Template: ComponentStory<typeof  Carousel> = (args) => < Carousel {...args} />;

export const Default = Template.bind({});
const contents = [{
    tag: 'Content Card 1', 
    title: 'Titulo do trabalho',
    href: '#',
    cover: 'https://s24937.pcdn.co/wp-content/uploads/2016/03/%C3%A1gua-e-caf%C3%A9.jpg.optimal.jpg',
  },
  {
    tag: 'Content Card 2',  
    title: 'Titulo do trabalho',
    href: '#',
    cover: 'https://www.receiteria.com.br/wp-content/uploads/cafe-cremoso-facil-0.jpg', 
  },
  {
    tag: 'Content Card 3',  
    title: 'Titulo do trabalho',
    href: '#',
    cover: 'https://www.receiteria.com.br/wp-content/uploads/cafe-cremoso-facil-0.jpg', 
  },
  {
    tag: 'Content Card 4',  
    title: 'Titulo do trabalho',
    href: '#',
    cover: 'https://www.receiteria.com.br/wp-content/uploads/cafe-cremoso-facil-0.jpg', 
  },
  {
    tag: 'Content Card 5',  
    title: 'Titulo do trabalho',
    href: '#',
    cover: 'https://www.receiteria.com.br/wp-content/uploads/cafe-cremoso-facil-0.jpg', 
  },
  {
    tag: 'Content Card 6',  
    title: 'Titulo do trabalho',
    href: '#',
    cover: 'https://www.receiteria.com.br/wp-content/uploads/cafe-cremoso-facil-0.jpg', 
  }
]

Default.args = {
  contents: contents
};

