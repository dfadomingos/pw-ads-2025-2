import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import CarsList from '../pages/cars/CarsList'
import CustomersList from '../pages/customers/CustomersList'
import Sobre from '../pages/sobreAutor'

export default function AppRoutes() {
 return <Routes>
   <Route path="/" element={ <Homepage /> } />
   <Route path="/cars" element={ <CarsList /> } />
   <Route path="/customers" element={ <CustomersList /> } />
   <Route path="/sobre" element={ <Sobre /> } /> {/*Rota da pagina sobre o autor*/}
  
 </Routes>
}
