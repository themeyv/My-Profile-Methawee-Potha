import './App.css'
import Header from './components/Header'
import Modals from './components/Modals'
import ContactMe from './components/ContactMe'
import Resume from './components/Resume'
import GitHub from './components/GitHub'
import Background from './components/Background'
import methawee from '../src/assets/methawee.jpg'

function App() {
  return (
    <>
    <div className="App">
    <Background/>
    <img
              src={methawee}
              alt="Resume"
              style={{ borderRadius: '50%', width: '350px', height: '350px' }}
            /><Header/>
            <Resume/><br/>
            <GitHub/>
     <ContactMe/></div>
     <Modals/>
      </>
  )
}

export default App
