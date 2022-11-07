import {render} from '@testing-library/react'
import { H4 } from "../H4";

describe('First test', () => {
    it('should exist', () => {
        const {getByText} = render(<H4>Funcionou</H4>)
        expect(getByText(/Funcionou/)).toBeTruthy()
    });    
});