import { useState } from 'react';
import iconClose from '.././assets/iconClose.svg'
import iconHamburger from '.././assets/iconHamburger.svg'


function Header() {
  
  const [mobileMenu, setMobileMenu] = useState(false); 
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <header className="container primary-header">
      <div className={`${mobileMenu ? 'primary-navigation primary-header__mobile' : 'visually-hidden__mobile'}`}>
        <div className="nav-wrapper">
          <nav className="primary-navigation" id="primary-navigation">
            <ul className="nav-list">
              <li onClick={toggleMobileMenu}><a href="#about-us">O nas</a></li>
              <li onClick={toggleMobileMenu}><a href="#offer">Usługi</a></li>
              <li onClick={toggleMobileMenu}><a href="#contact">Kontakt</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <button className="btn" onClick={toggleMobileMenu}>
        {
            mobileMenu 
            ? <img src={iconClose} alt="closeMenu" />
            : <img src={iconHamburger} alt="menu" />
        }
      </button>
    </header> 
  )
}

export default Header;
