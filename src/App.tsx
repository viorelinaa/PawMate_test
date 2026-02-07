import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main id="app">
        <HomePage />
      </main>
      <Footer />
    </>
  )
}

export default App
