import baner from '.././assets/baner.png'

function Hero() {
  return (
    <section>
      <div>
        <img src={baner} className="hero-img" alt='baner'></img>
      </div>
    </section>
  )
}

export default Hero;