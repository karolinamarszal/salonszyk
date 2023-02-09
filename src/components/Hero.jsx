import baner from '.././assets/baner.png'
import logoxs from '.././assets/logoxs.png'

function Hero() {
  return (
    <section>
      <div className="container padding-block-600">
        <img src={baner} className="hero-img" alt='baner'></img>
        <img src={logoxs} className="hero-img__sm" alt='logoxs'></img>
      </div>
    </section>
  )
}

export default Hero;