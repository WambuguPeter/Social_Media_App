import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles//App.scss'
import Major from './Layout/Major'
import Login from './Pages/Login'
import Register from './Pages/Register'
function App() {

  return (  
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Register />} />
    <Route path="/register" element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="/*" element={<Major />} />
  
  </Routes>

  </BrowserRouter>
  )
}

export default App
