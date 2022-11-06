import {render} from '@testing-library/react'
import { H1 } from "../H1";

describe('First test', () => {
    it('should exist', () => {
        const {getByText} = render(<H1>Funcionou</H1>)
        expect(getByText(/Funcionou/)).toBeTruthy()
    });    
});