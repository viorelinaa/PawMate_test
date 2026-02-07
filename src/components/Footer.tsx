import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} PetHub. Creat cu ❤️ pentru animale.
      </div>
    </footer>
  )
}
