// import Authentication from './components/Authentication/Authentication'
import MinePage from './components/Minepage/MinePage'
import MakeRequest from './components/MakeRequest/makeRequest'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Completed from './components/CompletedOrder/Completed'
import Reschedule from './components/Reschedule/Reschedule'
import Revenue from './components/Revenue/Revenue'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MinePage/>} />
      <Route path='/makeRequest' element={<MakeRequest/>} />
      <Route path='/completedOrder' element={<Completed/>} />
      <Route path='/reschedule' element={<Reschedule/>} />
      <Route path='/revenue' element={<Revenue/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
