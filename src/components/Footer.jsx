import logoxs from '.././assets/logoxs.png'

function Footer() {
  return (
    <section className="footer-main bg-neutral">
      <div className="container text-neutral">
        <div className="footer-content">
          <a href="#">
            <img src={logoxs} className="footer-logo" width="140" height="130" alt='logoxs'></img>
          </a>
          <div className="footer-menu">
            <ul className="footer-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#about-us">O nas</a></li>
              <li><a href="#offer">Usługi</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </div>  
          <div className="footer-contact">
            <h2>Salon fryzjerski Szyk</h2>
            <br></br>
            <p>Tel. +48 888 888 888</p>
            <br></br>
            <p>Kwiatowa 23</p>
            <p>45-300 Narnia</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright &copy;2023. Salon Fryzjerski Szyk. All Rights Reserved</p>
        </div>
      </div>
    </section>
  )
}

export default Footer;