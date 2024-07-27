import '../css/Header.scss';
import netflixLogo from '../images/Netflix_Logo_RGB.png';
import accountImg from '../icons/account-img.png';
import searchBarIcon from '../icons/search-icon.png';
import notifyIcon from '../icons/notify-icon.png';
import menuIcon from '../icons/menu-icon.png';
import manageAccountIcon from '../icons/account-manage-icon.png';
import assistanceIcon from '../icons/assistance-icon.png';
import { useState, useEffect } from 'react';
import { logout } from '../firebase/firebase';
import { Link } from 'react-router-dom';

const Header = () => {

    // Scroll Effect
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if(window.scrollY > 10){
            setScrolled(true)
        } else{
            setScrolled(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    // Hamburger and MbNav Menu
    const [hambMenu, setHambMenu] = useState(false);
    const [mbNavOpen, setMbNavOpen] = useState(false);

    const handleHambAndMbNav = () => {
        setHambMenu(!hambMenu);
        setMbNavOpen(!mbNavOpen);
    };

    useEffect(() => {
        if(mbNavOpen){
            document.body.style.overflow = 'hidden';
        } else{
            document.body.style.overflow = 'auto';
        }
    })

    // Search bar
    const [searchBar, setSearchBar] = useState(false);

    const handleSearchBar = () => {
        setSearchBar(!searchBar);
    }

    // Dropdown
    const [dropIsDisplay, setDropIsDisplay] = useState(false);

    return(
        <>
            <header className={scrolled ? 'scroll' : ''}>
                <Link to={'/'}>
                    <img src={netflixLogo} alt="Netflix logo" className='logo' />
                </Link>
                <nav className='nav-desk'>
                    <ul>
                        <Link to={'/'}>
                            <li>Home</li>
                        </Link>
                        <Link to={'/series'}>
                            <li>TV Series</li>
                        </Link>
                        <Link to={'/movies'}>
                            <li>Movies</li>
                        </Link>
                        <Link to={'/movies'}>
                            <li>New and Populars</li>
                        </Link>
                        <Link to={'/my-list'}>
                            <li>My List</li>
                        </Link>
                    </ul>
                </nav>
                <div className='search-account'>
                    {
                        searchBar ? <div className="search-bar-container" >
                        <img src={searchBarIcon} className='icon' alt="Search bar icon" onClick={handleSearchBar} />
                        <input type="text" name="search-bar" id="search-bar" placeholder='Titoli, persone, generi' />   
                    </div> : <img src={searchBarIcon} className='icon' alt="Search bar icon" onClick={handleSearchBar} />
                    }
                    <a href="#">
                        <span>Children</span>
                    </a>
                    <img src={notifyIcon} className='icon' alt="Notify icon" />
                    <div className='account' onMouseEnter={() => setDropIsDisplay(true)}>
                        <img src={accountImg} id='account-icon' alt="Netflix account image" />
                        <img src={menuIcon} id='span-icon' alt="Menu icon" />
                    </div>
                </div>
                <nav className={dropIsDisplay ? 'dropdown' : 'none'} onMouseLeave={() => setDropIsDisplay(false)}>
                    <ul>
                        <div className='dropdown-element'>
                            <img src={accountImg} alt="" className='icon' />
                            <li>Guest 1</li>
                        </div>
                        <div className='dropdown-element'>
                            <img src={manageAccountIcon} alt="" className='icon' />
                            <li>Account</li>
                        </div>
                        <div className='dropdown-element'>
                            <img src={assistanceIcon} alt="" className='icon' />
                            <li>Assistance</li>
                        </div>
                        <div className='dropdown-element'>
                            <li id='log-out-element' onClick={() => logout()}>Log out</li>
                        </div>
                    </ul>
                </nav>
                <div className={`hamb ${hambMenu ? 'hamb-open' : ''}`} onClick={handleHambAndMbNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav onClick={handleHambAndMbNav} className={`mb-nav ${mbNavOpen ? 'mb-nav-open' : ''}`}>
                    <ul>
                        <a href="#" className='account-a'>
                            <img src={accountImg} alt="" className='icon' />
                            <li>Account</li>
                        </a>
                        <a href="#">
                            <li>Assistance</li>
                        </a>
                        <a href="#" onClick={() => logout()}>
                            <li>Log Out</li>
                        </a>
                        <a href="#">
                            <li className='home-li'>Home</li>
                        </a>
                        <a href="#">
                            <li>My List</li>
                        </a>
                        <a href="#">
                            <li>Children and families</li>
                        </a>
                        <a href="#">
                            <li>Action</li>
                        </a>
                        <a href="#">
                            <li>Science fiction</li>
                        </a>
                        <a href="#">
                            <li>Comedy</li>
                        </a>
                        <a href="#">
                            <li>Horror</li>
                        </a>
                        <a href="#">
                            <li>Thriller</li>
                        </a>
                        <a href="#">
                            <li>Rewarded</li>
                        </a>
                    </ul>
                </nav>
            </header>
        </>
    )
};

export default Header;