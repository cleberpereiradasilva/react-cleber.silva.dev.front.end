import {render} from '@testing-library/react'
import { Card } from "../Card";

describe('First test', () => {
    it('should exist', () => {
        const fields = {
            tag: 'Content Card 6',  
            title: 'Titulo do trabalho',
            href: '#',
            cover: 'valid_image_url', 
          }
        const {getByText} = render(<Card {...fields} />)
        expect(getByText(/Content Card 6/)).toBeTruthy()
        expect(getByText(/Titulo do trabalho/)).toBeTruthy()
        expect(getByText(/Veja mais/)).toBeTruthy()
    });    
});