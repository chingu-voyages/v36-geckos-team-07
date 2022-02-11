import React from 'react';
import headerImage from './../../images/header-img.jpg';

function Header() {
  return  (
    <div className='header'>
        <div className="header-image" style={{ backgroundImage: `url(${headerImage})` }}>
            </div>
            <div className="header-title">
                <h1>Token Train</h1>
                <p>Your station for all things crypto and NFT</p>
            </div>

    </div>
    
  );
}

export default Header;
