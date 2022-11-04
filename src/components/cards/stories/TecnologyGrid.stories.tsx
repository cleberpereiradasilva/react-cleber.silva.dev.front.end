import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Database, Docker, Html, Python, React } from 'components/icons';

import {  TechnologyGrid } from '../TechnologyGrid';

export default {
  title: 'Cards/Technology/Grid',
  component: TechnologyGrid,
  argTypes: {
    techList: {
      control: false,
    }, 
  }
} as ComponentMeta<typeof  TechnologyGrid>;

const GridList: ComponentStory<typeof  TechnologyGrid> = (args) => < TechnologyGrid {...args} />;

export const Grid = GridList.bind({});
const technologyList = [{
    children: <Html />,
    description: 'Html & CSS'
  },
  {
    children: <React />,
    description: 'React JS'
  }, 
  {
    children: <Python />,
    description: 'Python 3.x'
  },
  {
    children: <Database />,
    description: 'Databases'
  },
  {
    children: <Docker />,
    description: 'Containers'
  }
];

Grid.args = {
  elements: technologyList
}

