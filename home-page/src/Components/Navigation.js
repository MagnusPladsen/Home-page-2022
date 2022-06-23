import react from 'react';
import { NavLink } from 'react-router-dom';
import '../Css/Navigation.css';
import { useState } from 'react';
import MenuIcon from '../Images/menu-icon.svg';


const cv = "https://docs.google.com/document/d/18BJjTVzUNpr8eiEqRhRikfWG54yaWjYtzItmOk2U7tY/edit?usp=sharing"

const github = <a href="https://github.com/MagnusPladsen" target="_blank"><i class="fa-brands fa-github fa-xl github nav-icon"></i></a>

const linkedin = <a href="https://www.linkedin.com/in/magnus-pladsen-1a2738226/" target="_blank"><i class="fa-brands fa-linkedin fa-xl linkedin nav-icon"></i></a>

const facebook = <a href="https://www.facebook.com/magnus.pladsen" target="_blank"><i class="fa-brands fa-facebook fa-xl facebook nav-icon"></i></a>

export default function Navigation() {
    const [isOpen, setIsOpen] = useState('closed');

    const handleClick = () => {
        if (isOpen === 'closed') {
            setIsOpen('open');
        }
        else {
            setIsOpen('closed');
        }
    }

  return (
    <div className="Navigation">
        <nav className="desktop-navigation">
        <text className="desktop-navigation__header">MAGNUS PLADSEN</text>
        {linkedin} {facebook} {github} 
            <ul className="desktop-navigation__list">
                <li className="desktop-navigation__item">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="desktop-navigation__item">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="desktop-navigation__item">
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="desktop-navigation__item">
                    <a href={cv} target="_blank" id="CV">CV</a>
                </li>
            </ul>
        </nav>
        <nav className="mobile-navigation">
            <text className="navigation__header">MAGNUS PLADSEN</text>
            <img src={MenuIcon} alt="menu-icon" className="navigation__menu-icon" onClick={handleClick} />
            <ul className="navigation__list" id={isOpen}>
            {linkedin} {facebook} {github}
                <li className="navigation__item">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="navigation__item">
                    <a href={cv} target="_blank">CV</a>
                </li>
                
            </ul>
        </nav>
    </div>
  );
}