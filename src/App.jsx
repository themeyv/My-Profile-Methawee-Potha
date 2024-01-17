import './App.css'
import Header from './components/Header'
import Modals from './components/Modals'
import ContactMe from './components/ContactMe'
import Resume from './components/Resume'
import GitHub from './components/GitHub'
import methawee from '../src/assets/methawee.jpg'

function App() {
  return (
    <>
    <div className="App">
    <img
              src={methawee}
              alt="methawee"
              style={{ borderRadius: '50%', width: '350px', height: '350px' }}
            /><Header/>
            <Resume/>
            <GitHub/>
     <ContactMe/></div>
      </>
  )
}

export default App
