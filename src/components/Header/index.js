import React from 'react';
import headerImage from './../../images/header-img.jpg';

function Header() {
  return  (
    <div className='header'>
        <div className="header-image" style={{ backgroundImage: `url(${headerImage})` }}>
            </div>
            <div className="header-title">
                <h1>Token Train</h1>
                <p>Your Station for all things Crypto and  NFT</p>
            </div>

    </div>
    
  );
}

export default Header;
