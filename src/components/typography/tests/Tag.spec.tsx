import {render} from '@testing-library/react'
import { Tag } from "../Tag";

describe('First test', () => {
    it('should exist', () => {
        const {getByText} = render(<Tag>Funcionou</Tag>)
        expect(getByText(/Funcionou/)).toBeTruthy()
    });    
});