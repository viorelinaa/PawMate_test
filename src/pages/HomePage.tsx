import '../styles/HomePage.css'

const tiles = [
  { title: 'Adopție', desc: 'Găsește un prieten nou (cu filtre).', href: '#/adoptie' },
  { title: 'Animale pierdute', desc: 'Anunțuri + căutare.', href: '#/pierdute' },
  { title: 'Veterinari', desc: 'Clinici din apropiere.', href: '#/veterinari' },
  { title: 'Pet sitting', desc: 'Îngrijire când ești plecat.', href: '#/pet-sitting' },
  { title: 'Donații', desc: 'ONG-uri și adăposturi.', href: '#/donatii' },
  { title: 'Voluntariat', desc: 'Implică-te în comunitate.', href: '#/voluntariat' },
  { title: 'Quiz', desc: 'Ce animal ți se potrivește?', href: '#/quiz' },
  { title: 'Wiki', desc: 'Informații pe specii.', href: '#/wiki' },
  { title: 'Ghid medical', desc: 'Semne & prevenție.', href: '#/ghid-medical' },
  { title: 'Blog', desc: 'Articole utile.', href: '#/blog' },
  { title: 'Evenimente', desc: 'Târguri, întâlniri, voluntariat.', href: '#/evenimente' },
  { title: 'Vânzări', desc: 'Produse (mock).', href: '#/vanzari' },
  { title: 'Ghid începător', desc: 'Primii pași responsabili.', href: '#/ghid' },
]

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-cloud cloud-1" />
        <div className="hero-cloud cloud-2" />
        <div className="hero-cloud cloud-3" />
        <div className="hero-sun" />
        <div className="hero-paw paw-1">🐾</div>
        <div className="hero-paw paw-2">🐾</div>
        <div className="hero-paw paw-3">🐾</div>
        <div className="hero-paw paw-4">🐾</div>

        <div className="hero-content">
          <h1 className="hero-title">PetHub</h1>
          <p className="hero-subtitle">
            Tot ce ai nevoie despre animalele de companie
          </p>
          <div className="hero-buttons">
            <a href="#/adoptie" className="btn-primary">Începe cu adopția</a>
            <a href="#/quiz" className="btn-secondary">Fă quiz-ul</a>
          </div>
        </div>
      </section>

      <section className="tiles-section">
        <h2 className="section-title">Explorează rapid</h2>
        <p className="section-subtitle">Alege o secțiune și continuă.</p>
        <div className="tiles-grid">
          {tiles.map((tile) => (
            <a key={tile.href} href={tile.href} className="tile-card">
              <h3 className="tile-title">{tile.title}</h3>
              <p className="tile-desc">{tile.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
