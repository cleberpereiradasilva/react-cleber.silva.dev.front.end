import {render} from '@testing-library/react'
import { Item } from "../Item";

describe('Menu Item test', () => {
    it('should exist', () => {
        const {getByText} = render(<Item href='#'>Funcionou</Item>)
        expect(getByText(/Funcionou/)).toBeTruthy()
    });  
    
    it('should is active', () => {
        const {container} = render(<Item href='#' active={true}>Active</Item>)
        expect(container.querySelector('div')).toBeInTheDocument()
    }); 
});