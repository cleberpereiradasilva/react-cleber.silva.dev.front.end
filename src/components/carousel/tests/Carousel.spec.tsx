import {render} from '@testing-library/react'
import { Carousel } from "../Carousel";

describe('First test', () => {
    it('should exist', () => {
        const contents = [{
            title: 'Content Card 1' 
          }]
        const {getAllByText} = render(<Carousel contents={contents} />)
           
        expect(getAllByText(/Content Card 1/)).toBeTruthy()
    });  
    
});