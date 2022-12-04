import React from 'react'
import './Menu.scss'
import { HiHome } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdWork } from 'react-icons/md'
import { RiMessage3Fill } from 'react-icons/ri'

const Menu = () => {
    return (
        <body className='overlay'>
             <main  className="menu">
            <div className='menu_items'>
                <a  className='item_menu' href='#home'><HiHome/>     Home</a>
                    <a  href="#skills" ><BsFillPersonFill/>     Skills</a>
                    <a href='#projects'> <MdWork/>     Projects</a>
                    <a href='#contact' > <RiMessage3Fill/>     Contact</a>
            </div>
                    
        </main>
        </body>
       
    );
}

export default Menu;