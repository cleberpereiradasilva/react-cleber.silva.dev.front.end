import {render} from '@testing-library/react'
import { Facebook, Instagram, Linkedin, Twitter, Youtube} from '../';
import { Social } from "../Social";

describe('Social link test', () => {
    it('should exist', () => {
        const {getByText} = render(<Social href='#' ariaLabel='aria-label'><div>Funcionou</div></Social>)
        expect(getByText(/Funcionou/)).toBeTruthy()
    });    
});

describe('Social Facebook icon test', () => {
    it('should exist Facebook icon', () => {
        const {queryByLabelText, container} = render(<Facebook href='#' ariaLabel='Facebook-aria-label' />)
        expect(queryByLabelText(/Facebook-aria-label/)).toBeTruthy()
        expect(container.querySelector('svg')).toBeInTheDocument()
    });    
});

describe('Social Linkedin icon test', () => {
    it('should exist Facebook icon', () => {
        const {queryByLabelText, container} = render(<Linkedin href='#' ariaLabel='Linkedin-aria-label' />)
        expect(queryByLabelText(/Linkedin-aria-label/)).toBeTruthy()
        expect(container.querySelector('svg')).toBeInTheDocument()
    });    
});

describe('Social Instagram icon test', () => {
    it('should exist Facebook icon', () => {
        const {queryByLabelText, container} = render(<Instagram href='#' ariaLabel='Instagram-aria-label' />)
        expect(queryByLabelText(/Instagram-aria-label/)).toBeTruthy()
        expect(container.querySelector('svg')).toBeInTheDocument()
    });    
});

describe('Social Twitter icon test', () => {
    it('should exist Facebook icon', () => {
        const {queryByLabelText, container} = render(<Twitter href='#' ariaLabel='Twitter-aria-label' />)
        expect(queryByLabelText(/Twitter-aria-label/)).toBeTruthy()
        expect(container.querySelector('svg')).toBeInTheDocument()
    });    
});
describe('Social Youtube icon test', () => {
    it('should exist Facebook icon', () => {
        const {queryByLabelText, container} = render(<Youtube href='#' ariaLabel='Youtube-aria-label' />)
        expect(queryByLabelText(/Youtube-aria-label/)).toBeTruthy()
        expect(container.querySelector('svg')).toBeInTheDocument()
    });    
});
