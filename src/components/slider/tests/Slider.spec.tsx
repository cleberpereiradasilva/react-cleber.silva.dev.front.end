import {render} from '@testing-library/react'
import { Slider } from "../Slider";

describe('First test', () => {
    it('should exist', () => {
        const images = [
            '../../photos/9.jpeg',
            '../../photos/10.jpeg',
            '../../photos/7.jpeg',
          ]
        const {getByTestId} = render(<Slider images={images} dataTestid = 'inside-test-id' />)
        expect(getByTestId('inside-test-id').querySelectorAll('div').length).toEqual(images.length + 1)
        
    });    
});