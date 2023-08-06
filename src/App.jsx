import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

import Crypto from './components/Crypto'
import News from './components/News'
import Exchange from './components/Exchange'
function App() {


  return (
    <>
  <div className='flex'>
    <div >

      <Navbar />
    </div>
    <div>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Navbar" element={<Navbar />}></Route>
        
        <Route path="/Crypto" element={<Crypto />}></Route>
        <Route path="/News" element={<News />}></Route>
        <Route path="/Exchange" element={<Exchange />}></Route>
      </Routes>
    </div>
  </div>


      
    </>
  )
}

export default App
