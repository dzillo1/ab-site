
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Portfolio.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Alignment from './Components/Alignment'



function App() {

  return (
    
      <div>
        <Navbar/>
          <Home/>
          <About/>
          <Alignment/>
          <Contact/>

      </div>
   
  )
}

export default App