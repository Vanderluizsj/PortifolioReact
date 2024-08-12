import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Curriculo from '../pages/Curriculo'
import Index from '../pages/Index'
import Portifolio from '../pages/Portifolio'
import './App.css'
const App = () => {
  return (
    
    <div className='container' id='efeito-vidro'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={"/"} element={<Index />} />
          <Route path={"/curriculo"} element={<Curriculo />} />
          <Route path={"/portifolio"} element={<Portifolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App