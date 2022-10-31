import {render} from '@testing-library/react'
import { Item } from "../Item";

describe('First test', () => {
    it('should exist', () => {
        const {getByText} = render(<Item>Funcionou</Item>)
        expect(getByText(/Funcionou/)).toBeTruthy()
    });    
});