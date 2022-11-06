import {render} from '@testing-library/react'
import { H2 } from "../H2";

describe('First test', () => {
    it('should exist', () => {
        const {getByText} = render(<H2>Funcionou</H2>)
        expect(getByText(/Funcionou/)).toBeTruthy()
    });    
});