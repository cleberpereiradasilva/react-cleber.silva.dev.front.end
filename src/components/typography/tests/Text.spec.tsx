import {render} from '@testing-library/react'
import { Text } from "../Text";

describe('First test', () => {
    it('should exist', () => {
        const {getByText} = render(<Text>Funcionou</Text>)
        expect(getByText(/Funcionou/)).toBeTruthy()
    });    
});