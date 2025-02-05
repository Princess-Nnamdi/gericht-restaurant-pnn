import React from 'react';
import { images } from '../../constants';

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'> {/*id enables us to scroll to the ssection*/}
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" /> {/*this component was created because it will be reused across several sections*/}
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type='button' className='custom__button' style={{backgroundColor: "#dcca87"}}>Explore More</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header_img'/>
    </div>
  </div>
);

export default Header;
