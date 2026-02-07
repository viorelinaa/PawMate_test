import { useState } from 'react'
import '../styles/Navbar.css'

const navLinks = [
  { label: 'Acasă', href: '#/' },
  { label: 'Adopție', href: '#/adoptie' },
  { label: 'Pierdute', href: '#/pierdute' },
  { label: 'Veterinari', href: '#/veterinari' },
  { label: 'Pet sitting', href: '#/pet-sitting' },
  { label: 'Donații', href: '#/donatii' },
  { label: 'Voluntariat', href: '#/voluntariat' },
  { label: 'Quiz', href: '#/quiz' },
  { label: 'Wiki', href: '#/wiki' },
  { label: 'Ghid medical', href: '#/ghid-medical' },
  { label: 'Blog', href: '#/blog' },
]

const moreLinks = [
  { label: 'Evenimente', href: '#/evenimente' },
  { label: 'Vânzări', href: '#/vanzari' },
  { label: 'Ghid începător', href: '#/ghid' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="top-nav">
        <div className="logo">🐾 PetHub</div>

        <div className="nav-center">
          <ul className="nav-links row-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={link.href === '#/' ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="nav-links row-2">
            {moreLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-right">
          <button className="cta-button">Donează Acum</button>
          <button
            className="burger"
            aria-label="Meniu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {[...navLinks, ...moreLinks].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
