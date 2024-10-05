import React, { useState } from 'react'
import './Navbar.css'
import { Logo } from '../Components_list';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Navbar({ set_page_visit, set_click_page }) {
    const [Page_click, Set_Page_click] = useState(false);
    const [Menu_click, Set_Menu_click] = useState(false);
    
    return (
        <div className='Navbar_main'>

            {Menu_click &&
                <div className='Mobile_navbar'>
                    <div className='Navbar_child_2_child' onClick={() => { set_click_page('Home') }}>Home</div>
                    <div className='Navbar_child_2_child' onClick={() => { Set_Page_click(!Page_click) }}>Pages <span style={{ display: 'inline-block', width: "max-content", height: 'max-content', rotate: '90deg' }} >&#8227;</span></div>
                    <div className='Navbar_child_2_child' onClick={() => { set_click_page('About') }}>About</div>
                    <a style={{ textDecoration: 'none' }} className='Navbar_child_2_child' href='https://www.linkedin.com/in/suresh-paliwal-a75a41266/' rel="noreferrer" target="_blank" >Contact</a>
                </div>}
            <div className='Navbar_child_1'>
                <img src={Logo} alt='Logo' />
            </div>
            <div className='Menu_icon'>
                {!Menu_click &&
                    <GiHamburgerMenu onClick={() => { Set_Menu_click(!Menu_click) }} />
                }
                {Menu_click &&
                    <RxCross2 onClick={() => { Set_Menu_click(!Menu_click); Set_Page_click(false) }} />
                }
            </div>
            <div className='Navbar_child_2'>
                <div className='Navbar_child_2_child' onClick={() => { set_click_page('Home') }}>Home</div>
                <div className='Navbar_child_2_child' onClick={() => { Set_Page_click(!Page_click) }}>Pages <span style={{ display: 'inline-block', width: "max-content", height: 'max-content', rotate: '90deg' }} >&#8227;</span></div>
                <div className='Navbar_child_2_child' onClick={() => { set_click_page('About') }}>About</div>
                <a style={{textDecoration:'none'}} className='Navbar_child_2_child' href='https://www.linkedin.com/in/suresh-paliwal-a75a41266/' target="_blank" rel="noreferrer" >Contact</a>
            </div>
            {Page_click &&
                <div className='Page_dropdown_menu'>
                    <div className='Page_dropdown_menu_child' onClick={() => { set_page_visit('Heart_disease'); set_click_page('Page') }}>Heart disease</div>
                    <div className='Page_dropdown_menu_child' onClick={() => { set_page_visit('Cancer'); set_click_page('Page') }}>Cancer</div>
                    <div className='Page_dropdown_menu_child' onClick={() => { set_page_visit('Brain_stroke'); set_click_page('Page') }}>Brain Stroke</div>
                    <div className='Page_dropdown_menu_child' onClick={() => { set_page_visit('Diabetes'); set_click_page('Page') }}>Diabeties</div>
                    <div className='Page_dropdown_menu_child' onClick={() => { set_page_visit('Kidney_disease'); set_click_page('Page') }}>Kidney Disease</div>
                </div>}
        </div>
    )
}

export default Navbar
