import {render} from '@testing-library/react'
import { Section } from "../Section";

describe('First test', () => {
    it('should exist', () => {
        const {getByText} = render(<Section>Funcionou</Section>)
        expect(getByText(/Funcionou/)).toBeTruthy()
    });    
});