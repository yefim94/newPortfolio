import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css'
import Contact from './Contact'
import Design from './Design'
import Frontend from './FrontEnd'
import Home from './Home'
import Mobile from './Mobile'
import {useState, useEffect} from 'react'
function App() {
  function handleHamburgerButton (E) {
    const navCont = document.querySelector('.nav-cont');
    setIsOpen(!isopen);
  }
  const [isopen, setIsOpen] = useState(false)
  return (
    <Router>
    <div style={{
    }} className='app-cont'>
    <div style={{overflowX: 'hidden'}}>
    <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: '-4em',
            backgroundColor: '#FAFBFD'
          }} className='nav'>
        <h1 style={{
          }}><Link to='/' style={{
            color: '#fff',
            backgroundColor: '#FF8578',
            borderRadius: '10px',
            padding: '0.3em 0.5em 0.3em 0.5em',
            cursor: 'pointer',
            textDecoration: 'none'
          }}>yb</Link></h1>
          <div onClick={handleHamburgerButton} style={{cursor: 'pointer'}}>
            <div className='nav-bar'></div>
            <div className='nav-bar'></div>
            <div className='nav-bar'></div>
          </div>

      </nav>
      {isopen && 
              <ul className='nav-cont' style={{overflowX: 'hidden'}}>
              <li className='link'>
                <Link to="/">Home</Link>
              </li>
              <li className='link'>
                <Link to="/Design">Design</Link>
              </li>
              <li className='link'>
                <Link to="/Mobile">Mobile</Link>
              </li>
              <li className='link'>
                <Link to="/FrontEnd">Front-end</Link>
              </li>
              <li className='contact-btn' style={{

              }}>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
        }
    </div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/Design">
          <Design />
        </Route>
        <Route path='/Mobile'>
          <Mobile />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/FrontEnd">
          <Frontend />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
