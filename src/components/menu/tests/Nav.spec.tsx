import {render} from '@testing-library/react'
import { Nav } from "../Nav";

describe('Nav Bar test', () => {
    it('should exist', () => {
        const {getByText} = render(<Nav><i>Item 1</i><i>Item 2</i></Nav>)
        expect(getByText(/Item 1/)).toBeTruthy()
    });    
});