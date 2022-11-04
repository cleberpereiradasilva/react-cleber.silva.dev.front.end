import {render} from '@testing-library/react'
import { Html } from 'components/icons';
import { TechnologyGrid } from '../TechnologyGrid';

describe('Should render TechnologyGrid', () => {
    const elements = [{
        children: <Html />,
        description: 'Html & CSS'
      },
    ];
    
    it('should exist', () => {
        const {getByText} = render(<TechnologyGrid elements={elements} />)
        expect(getByText(/Html & CSS/)).toBeTruthy()
    });    
});