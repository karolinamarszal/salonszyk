function Contact() {
  return (
    <section className="text-center-sm-only padding-block-600" id="contact">
      <div className="container">
        <h1 className="fs-primary-heading">Kontakt</h1>
          <div className="even-columns">
            <div className="google-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.431456639041!2d22.235131513851144!3d50.064011078864986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cedd6ae1811c5%3A0x690189f0ff0a6a46!2sKwiatowa%2023%2C%2037-100%20%C5%81a%C5%84cut!5e0!3m2!1spl!2spl!4v1681387152520!5m2!1spl!2spl" 
                width="600" 
                height="450"
                style={{ border:"0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="contact">
              <h2 className="fs-secondary-heading text-center-sm-only">Salon fryzjerski Szyk</h2>
              <div className="phone">
                <h3 className="bold">Telefon</h3>
                <p>+48 888 888 888</p>
                <br></br>
              </div>
            
              <h3 className="bold">Godziny otwarcia</h3>
              <div className="working-hours">
                <ul className="contact-list__days">
                  <li>Poniedziałek</li>
                  <li>Wtorek</li>
                  <li>Środa</li>
                  <li>Czwartek</li>
                  <li>Piątek</li>
                  <li>Sobota</li>
                  <li>Niedziela</li>
                </ul>
                <ul className="contact-list__hours">
                  <li><span>nieczynne</span></li>
                  <li>9:00 - 17:00</li>
                  <li>9:00 - 17:00</li>
                  <li>9:00 - 17:00</li>
                  <li>9:00 - 17:00</li>
                  <li>7:00 - 15:00</li>
                  <li><span>nieczynne</span></li>
                </ul>
                <ul className="contact-list__basic">
                  <li><span>Adres</span></li>
                  <li>Kwiatowa 23</li>
                  <li>45-300 Narnia</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Contact;
