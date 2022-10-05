import React from 'react';
import './Navbar.scss'

const Navbar = () => {
    return (
          <main className='Navbar'>
        <div className='menu_boton'>
          <img className='image_perfil menu_boton' src="https://pbs.twimg.com/profile_images/1507808629575106575/hQkSppSG_400x400.jpg" alt="" />
        </div>
        <div className='menu_boton' ><svg width="32" height="32" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.90625 35.2188H38.0938M7.90625 23.7188H38.0938M7.90625 12.2188H38.0938" stroke="black" stroke-opacity="0.59" stroke-width="3.22" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
       </main>
    );
}

export default Navbar;