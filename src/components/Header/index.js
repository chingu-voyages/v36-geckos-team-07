import React from 'react';
import headerImage from './../../images/header-img.jpg';

function Header() {
  return  (
    <div className='header'>
        <div className="header-image" style={{ backgroundImage: `url(${headerImage})` }}>
            </div>
            <div className="header-title">
                <h1>NFT APP</h1>
                <p>The largest source to everything NFT</p>
            </div>

    </div>
    
  );
}

export default Header;
