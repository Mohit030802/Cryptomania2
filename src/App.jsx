import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

import Crypto from './components/Crypto'
import News from './components/News'

import CrytpoInfo from './components/CrytpoInfo'
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
        <Route path="/Cryptoinfo/:coinId" element={<CrytpoInfo />}></Route>
        <Route path="/News" element={<News />}></Route>
      </Routes>
    </div>
  </div>


      
    </>
  )
}

export default App
