function Header() {
  return (
    <header className="primary-header">
      <div className="container">
        <div className="nav-wrapper">
          <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
            <span className="visually-hidden">Menu</span>
          </button>
          <nav className="primary-navigation" id="primary-navigation">
            <ul aria-label="primary" role="list" className="nav-list">
              <li><a href="#about-us">O nas</a></li>
              <li><a href="#offer">Usługi</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;