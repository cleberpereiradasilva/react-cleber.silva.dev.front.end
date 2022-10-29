import {render} from '@testing-library/react'
import { Button } from "../";

describe('First test', () => {
    it('should exist', () => {
        const {getByText} = render(<Button />)
        expect(getByText(/Funcionou/)).toBeTruthy()
    });    
});