import {render} from '@testing-library/react'
import { Social } from "../Social";

describe('First test', () => {
    it('should exist', () => {
        const {getByText} = render(<Social>Funcionou</Social>)
        expect(getByText(/Funcionou/)).toBeTruthy()
    });    
});