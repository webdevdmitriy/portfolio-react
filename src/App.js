import './styles/main.css'

import NavBar from './components/Navbar/Navbar'

import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Projects from './pages/Project'
import Contacts from './pages/Contacts'

function App() {
  return (
    <div classNameName="App">
      <NavBar />
      {/* <Home /> */}
      {/* <Projects /> */}
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
