import {render} from '@testing-library/react'
import { Html } from 'components/icons';
import { Technology } from "../Technology";

describe('Should render Technology', () => {
    it('should exist', () => {
        const {getByText} = render(<Technology description='Html & CSS'>
             <Html />  
        </Technology>)
        expect(getByText(/Html & CSS/)).toBeTruthy()
    });    
});