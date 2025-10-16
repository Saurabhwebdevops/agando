import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import  './assets/style.min.css'
import logo from '../public/images/web-logo.png'
import { Footer } from './components/Footer'
import menuContext from './components/Menu'
import { Service } from './components/Service'
function App() {
  const [count, setCount] = useState(0)
  const   menuItem=['Home','About us','Who we are','Contact us'];
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
   <menuContext.Provider value={menuItem}>
      <Header logo={logo}/>
      <Service/>
      <Footer logo={logo}/>
      </menuContext.Provider>
    </>
  )
}

export default App
