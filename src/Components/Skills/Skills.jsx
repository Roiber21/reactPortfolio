import React from 'react'
import './Skils.scss'
import { TbBrandFigma } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io'
import { DiCss3 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { FaGit } from 'react-icons/fa'
import { SiMaterialui } from 'react-icons/si'
import { SiStyledcomponents } from 'react-icons/si'
import { SiWebpack } from 'react-icons/si'
import { SiVite } from 'react-icons/si'


const Skills = () => {
    return (
        <div className="container_skills">
            <p className='title_skills'>Skills</p>
            <div className="container_items">
                <div className="item item-1">
               <IoLogoJavascript className='iconos' />
                    <p className='item_title'>JavaScript</p>
                </div>
                <div className="item item_2">
                    <TbBrandFigma className='iconos' />
                   
                    <p className='item_title'>Figma</p>
                </div>
            
                <div className="item item_3">
                    <DiCss3 className='iconos' />
                   
                    <p className='item_title'>Css</p>
                </div>
               
                <div className="item item_4">
                    <FaReact className='iconos' />
                   
                    <p className='item_title'>React</p>
                </div>
                <div className="item item_5">
                <FaGit className='iconos' />
                   
                   <p className='item_title'>Git</p>
                </div>
                <div className="item item_6">
                <SiMaterialui className='iconos' />
                   
                   <p className='item_title'>MaterialUI</p>
                </div>
                <div className="item item_7">
                <SiStyledcomponents className='iconos' />
                   
                   <p className='item_title'>styled components</p>
                </div>
                <div className="item item_8">
                <SiWebpack className='iconos' />
                   
                   <p className='item_title'>Webpack</p>
                </div>
                <div className="item item_9">
                <SiVite className='iconos' />
                   
                   <p className='item_title'>Vite</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;