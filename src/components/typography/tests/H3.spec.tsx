import {render} from '@testing-library/react'
import { H3 } from "../H3";

describe('First test', () => {
    it('should exist', () => {
        const {getByText} = render(<H3>Funcionou</H3>)
        expect(getByText(/Funcionou/)).toBeTruthy()
    });    
});