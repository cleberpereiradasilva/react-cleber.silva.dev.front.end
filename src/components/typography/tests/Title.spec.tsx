import {render} from '@testing-library/react'
import { Title } from "../Title";

describe('First test', () => {
    it('should exist', () => {
        const {getByText} = render(<Title>Funcionou</Title>)
        expect(getByText(/Funcionou/)).toBeTruthy()
    });    
});