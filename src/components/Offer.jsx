import hairman from '.././assets/hairman.png'

function Offer() {
  return (
    <section className="text-center-sm-only padding-block-600" id="offer">
      <div className="container">
        <h1 className="fs-primary-heading">Usługi</h1>
          <div className="even-columns">
            <div className="flow offer-list">
              <ul>
                <li>Strzyżenie męskie</li>
                <li>Strzyżenie damskie</li>
                <li>Farbowanie włosów jeden kolor + strzyżenie</li>
                <li>Farbowanie odrostów + strzyżenie</li>
                <li>Farbowanie + Refleksy + Strzyżenie</li>
                <li>Ombre/Sombre + Strzyżenie</li>
                <li>Upięcia okolicznościowe, w tym fryzury ślubne</li>
              </ul>
            </div>
            <div className="sudo__img">
              <img className="offer__img" src={hairman} alt="hairman"></img>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Offer;