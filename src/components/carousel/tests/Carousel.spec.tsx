import {render} from '@testing-library/react'
import { Carousel } from "../Carousel";
import { Arrow } from '../styles';

describe('First test', () => {
    it('should exist', () => {
        const contents =   [{
            tag: 'Content Card 6',  
            title: 'Titulo do trabalho',
            href: '#',
            cover: 'valid_imagem_url', 
          }
        ]
        const {getAllByText} = render(<Carousel contents={contents} />)
           
        expect(getAllByText(/Content Card 6/)).toBeTruthy()
        expect(getAllByText(/Titulo do trabalho/)).toBeTruthy()
        expect(getAllByText(/Veja mais/)).toBeTruthy()
    });  
});

describe('Test Arrow', () => {
    it('should exist', () => {
        const {getByText} = render(<Arrow>Funcionou</Arrow>)
        expect(getByText(/Funcionou/)).toBeTruthy()
    }); 
});