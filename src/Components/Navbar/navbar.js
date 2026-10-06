import {NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const SideNavbar = () => {

    //states
    const [navbarToggleFlag ,setnavbarToggleFlag] = useState(false);
    const MobileSidenavbarRef = useRef(null);
    //states

    //useEffect life cycle
    useEffect(()=>{
        document.addEventListener('mousedown', handleClickOutside); 
        window.addEventListener('scroll', handleVerticalScroll);
    } ,[]);
    //useEffect life cycle

    function navbartoggler(){
        setnavbarToggleFlag(!navbarToggleFlag);
    }

    function handleClickOutside(event){
        if (MobileSidenavbarRef.current && !MobileSidenavbarRef.current.contains(event.target)) {
            setnavbarToggleFlag(false);
        }
    }

    function handleVerticalScroll(){
        const position = window.scrollY;
        if (position > 1){
            setnavbarToggleFlag(false);
        } 
    }


    return (
        <>
        <div ref={MobileSidenavbarRef} className={navbarToggleFlag ? "mobile-nav-open" : "mobile-nav-closed"}>
            <ul className="navbar-menu2 my-5 text-nowrap">  
                <li><NavLink to='/service'>خدمات</NavLink></li>
                <li><NavLink>راهنما</NavLink></li>
                <li><NavLink>درباره ما</NavLink></li>
                <li><NavLink>ارتباط با ما</NavLink></li>
                <li><button className="btn navbar-btn">سایت خود را بسازید</button></li>
                <i onClick={navbartoggler} className="fa fa-close mobile-nav-closebtn"></i>
            </ul>
        </div>
        <div className={navbarToggleFlag ? "sidenavbar-open-bg-blur" : ""}>
            <nav className="navbar" style={{height: '10vh'}}>
                <div className="navbar-overlay"></div>
                <div>
                    <li className="nav-main-logo">
                        <NavLink to="/"><h3>Fugen</h3></NavLink>
                    </li>
                    <ul className="navbar-menu text-nowrap">
                            
                        <li className="dropdown">
                            <NavLink to="/service">خدمات</NavLink>
                            
                            {/* Dropdown content */}
                            <div className="dropdown-menu">
                                <div className="row">
                                    <div className="col-6">
                                        <NavLink to="/service">طراحی و توسعه وبسایت</NavLink>
                                        <p className="text-muted">توسعه فرانت اند و بک اند</p>
                                        <NavLink to="/service">طراحی و توسعه اپلیکیشن IOS</NavLink>
                                        <p className="text-muted">با استفاده از Swift یا React Native</p>
                                    </div>
                                    <div className="col-6">
                                        <NavLink to="/service">طراحی و توسعه اپلیکیشن اندروید</NavLink>
                                        <p className="text-muted">با استفاده از kotlin یا React Native</p>
                                        <NavLink to="/service">خدمات سئو</NavLink>
                                        <p className="text-muted">افزایش بازدید و فروش</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                            
                        <li><NavLink>راهنما</NavLink></li>
                        <li><NavLink>درباره ما</NavLink></li>
                        <li><NavLink>ارتباط با ما</NavLink></li>
                        <li><button className="btn navbar-btn">سایت خود را بسازید</button></li>
                    </ul>
                    <i onClick={navbartoggler} className={navbarToggleFlag ? "d-none" : "navbar-toggle-btn"}>
                        <div className="hamburger-icon">
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </i>
                </div>
            </nav>
        </div>
        </>
    );
}
 
export default SideNavbar;