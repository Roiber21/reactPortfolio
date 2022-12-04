import React, { useRef, useState } from 'react';
import Menu from '../Menu/Menu';
import { AiOutlineClose } from 'react-icons/ai'
import './Navbar.scss'
import { useEffect } from 'react';
import { HiHome } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdWork } from 'react-icons/md'
import { RiMessage3Fill } from 'react-icons/ri'


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navActive, setNavActive] = useState('#');

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
       
        console.log(menuRef.current);
         setOpen(false);
      }      
    };

    document.addEventListener("mousedown", handler);

    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
 
    return (
          <main  className="Navbar">
        <div className='menu_boton1'>
          <img className='image_perfil menu_boton' src="https://ristlean.sirv.com/perfil-24L4gqhs.jpg" alt="" />
        </div>
        <div  className="menu_boton2 menu_boton"  ref={menuRef} onClick={()=>{setOpen(!open)}} > { open ? <svg  width="32" height="32" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 11L34 34M11 34L34 11" stroke="black" stroke-opacity="0.59" stroke-width="3.22" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 : <svg width="32" height="32" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.90625 35.2188H38.0938M7.90625 23.7188H38.0938M7.90625 12.2188H38.0938" stroke="black" stroke-opacity="0.59" stroke-width="3.22" stroke-linecap="round" stroke-linejoin="round"/>
</svg>} 
</div>
<main   className={`dropdown-menu menu ${open? 'active' : 'inactive'}`}>
            <div className='menu_items'>
                    <a  onClick={()=> setNavActive('#home')} className={navActive === '#home' ? 'item_menu item_menu_active' :'item_menu'} href='#home'>
                      <HiHome/>     Home
                    </a>
                    <a  onClick={()=> setNavActive('#skills')} className={navActive === '#skills' ? 'item_menu item_menu_active' :'item_menu'} href="#skills" >
                      <BsFillPersonFill/>     Skills
                    </a>
                    <a  onClick={()=> setNavActive('#projects')} className={navActive === '#projects' ? 'item_menu item_menu_active' :'item_menu'} href='#projects'> 
                    <MdWork/>     Projects
                    </a>
                    <a  onClick={()=> setNavActive('#contact')} className={navActive === '#contact' ? 'item_menu item_menu_active' :'item_menu'} href='#contact' > 
                    <RiMessage3Fill/>     Contact
                    </a>
            </div>
                    
        </main>
       
       </main>
      
    );
}

export default Navbar;