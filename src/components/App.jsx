import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Curriculo from '../pages/Curriculo'
import Index from '../pages/Index'
import Portifolio from '../pages/Portifolio'
const App = () => {
  return (
    
    <div className='container'>
      <BrowserRouter>
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