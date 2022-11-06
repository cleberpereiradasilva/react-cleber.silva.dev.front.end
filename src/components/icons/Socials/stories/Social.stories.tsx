import {  Linkedin } from '../';
import { Facebook } from '../Facebook';
import { Instagram } from '../Instagram';
import { Twitter } from '../Twitter';
import { Youtube } from '../Youtube';

export default {
  title: 'Icons/Social',
}

const Template = () => [
  <Linkedin href='https://www.linkedin.com' ariaLabel='Link to my linkedin'/>,
  <Youtube href='https://www.youtube.com' ariaLabel='Link to my youtube channel'/>,
  <Instagram href='https://www.instagram.com' ariaLabel='Link to my instagram'/>,
  <Facebook href='https://www.facebook.com' ariaLabel='Link to my facebook'/>,
  <Twitter href='https://www.twitter.com' ariaLabel='Link to my twitter'/>
]

export const SocialBar = Template.bind({});

