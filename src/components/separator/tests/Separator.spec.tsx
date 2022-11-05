import {render} from '@testing-library/react'
import { Separator } from "../Separator";

describe('First test', () => {
    it('should exist', () => {
        const {getByText} = render(<Separator>Funcionou</Separator>)
        expect(getByText(/Funcionou/)).toBeTruthy()
    });    
});