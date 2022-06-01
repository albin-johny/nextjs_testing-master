import Link from "next/link"
import Image from 'next/image'
import { useEffect, useState, useCallback } from "react";
import { idRouteScroll } from "@utility/js/scroll.js";







const HeaderTag= (props: any)=>{

    const [colorChange, setColorchange] = useState(false);
    const [activeNav, setAciveNav] = useState("home");
    const [toggleActive, setToggleActive]= useState(false);
    const [maxMDScreen, setMaxMDScreen]= useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', changeNavbarColor);
        window.addEventListener('resize', changeNavbarColor);
        idRouteScroll();
        const hashId = window.location.hash;
        if (hashId) {
          const element = document.querySelector(hashId);
            if (element) {
                let splitHashId= hashId.split("#")
                setAciveNav(splitHashId[1]);
            }
        }
    },[]);

    useEffect(()=>{
        props.parentCallback(toggleActive);
    },[toggleActive])

    const changeNavbarColor = () =>{
        let media_max_md = window.matchMedia('(max-width: 767px)');
        if(window.scrollY >= 80){
            setColorchange(true);
            if(media_max_md.matches) {
                setMaxMDScreen(true)
            }else {
                setMaxMDScreen(false)
            }
        }
        else{
            setColorchange(false);
            setMaxMDScreen(false)
        }
    };


    const handleTogglebar= ()=>{
        if(toggleActive) {
            setToggleActive(false);
        }
    }


    return (
        <>
            <nav className={`navbar navbar-expand-md fixed-top navbar-wrapper ${colorChange ? 'navbar-wrapper--bg-white' : 'navbar-wrapper--bg-transparent'}`}>
                <div className="container-md">
                    <Link href="/">
                        <a onClick={()=>{setAciveNav("home");handleTogglebar();}} className={`${colorChange ? 'logo-txt--sm': ''} logo-txt`}>
                            <Image
                                className=""
                                src={`${process.env.SITE_URL}images/brand-logo.png`}
                                alt="Picture of the author"
                                width={100}
                                height={50}
                                priority
                            />
                            <span className="logo-des-txt">DAT</span>
                        </a>
                    </Link>
                    <div className={`collapse navbar-collapse ${toggleActive ? 'show-vertical-nav' : ''}`} id="mynavbar">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link href="#mission"><a onClick={()=>{idRouteScroll();setAciveNav("mission");handleTogglebar();}} className={`nav-link ${(activeNav == "mission") ? 'active' : '' }`}>Mission</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#vission"><a onClick={()=>{idRouteScroll();setAciveNav("vission");handleTogglebar();}} className={`nav-link ${(activeNav == "vission") ? 'active' : '' }`}>Vission</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#aim"><a onClick={()=>{idRouteScroll();setAciveNav("aim");handleTogglebar();}} className={`nav-link ${(activeNav == "aim") ? 'active' : '' }`}>Aim</a></Link>
                            </li>
                        </ul>
                    </div>
                    <Link href="#contact-us"><a onClick={()=>{setAciveNav("home");handleTogglebar();}} type="button" className={`btn btn-orange btn--header-contact ${maxMDScreen ? 'show-toggle-btn': ''}`}>Contact Us</a></Link>
                    <button className={`navbar-toggler ${toggleActive ? 'toggle-active' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar" onClick={()=>setToggleActive(!toggleActive)}>
                        <span className="navbar-toggle-icon"></span>
                        <span className="navbar-toggle-icon"></span>
                        <span className="navbar-toggle-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    )
}



export default HeaderTag