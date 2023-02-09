import hairabout from '.././assets/hairabout.png'

function AboutUs() {
  return (
    <section className="text-center-sm-only padding-block-600">
      <div className="container">
        <div className="even-columns">
          <div className="flow">
            <h1 className="fs-primary-heading">O nas</h1>
            <p>Salon Fryzjerski "Szyk" to miejsce, w którym każdy może poczuć się wyjątkowo. Nasz zespół składa się 
              z doświadczonych i profesjonalnych fryzjerów, którzy dbają o to, aby każdy nasz klient czuł się 
              zadowolony z wykonanej usługi - stawiamy na najwyższą jakość i komfort.</p>
              <p>Nasz zespół specjalizuje się w różnego rodzaju fryzurach, od klasycznych po bardziej wymyślne i nowoczesne. 
              Regularnie bierzemy udział w szkoleniach dotyczących najnowszych trendów i technik. 
              Oferujemy nie tylko strzyżenie, ale również koloryzację, stylizację włosów, a także inne usługi, 
              takie jak np. upięcia ślubne. Dbamy o to, aby nasz salon był przyjazny dla każdego, dlatego 
              oferujemy szeroką gamę usług dostosowanych do potrzeb naszych klientów.</p>
              <p>Jeśli szukasz miejsca, w którym możesz poczuć się wyjątkowo i zadbać o swoje włosy, to Salon Fryzjerski "Szyk" 
              jest idealnym miejscem dla Ciebie. Zarezerwuj swoją wizytę już dziś i przekonaj się, jak wiele 
              możemy dla Ciebie zrobić.</p>
          </div>
          <div className="sudo__img">
            <img className="about__img" src={hairabout} alt="hairabout"></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;