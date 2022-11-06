import {render} from '@testing-library/react'
import { Card } from "../Card";

describe('First test', () => {
    it('should exist', () => {
        const {getByText} = render(<Card title={'Funcionou'} />)
        expect(getByText(/Funcionou/)).toBeTruthy()
    });    
});