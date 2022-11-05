import {render} from '@testing-library/react'
import { Subtitle } from "../Subtitle";

describe('First test', () => {
    it('should exist', () => {
        const {getByText} = render(<Subtitle>Funcionou</Subtitle>)
        expect(getByText(/Funcionou/)).toBeTruthy()
    });    
});