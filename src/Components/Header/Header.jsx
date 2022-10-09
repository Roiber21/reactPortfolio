import React from 'react'
import Logo from '../../assets/Logo';
import './Header.scss'



const Header = () => {
    return (
        <main className='container'>
            <div className='card'>
                <div className='logo' >
                    <Logo></Logo>
                </div>
                <div className='line'> </div>
                <div className='rol'> Front end <br />
                Developer</div>
                <div className='description' >
                    <p>I'm a front-end developer
 , I studied at Platzi through the Empoderatech scholarship where I
graduated as a Web Programmer
in the frontend area, passionate
about technologies, the
development of client-side
applications using HTML, CSS,
JavaScript and React.
Motivated, creative and
innovative. Self-taught, passionate
about learning and always firm in
never stopping learning</p>
                </div>
            </div>
           


        </main>
     
    );
}

export default Header;