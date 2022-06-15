import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import CuartaFeria from './pages/CuartaFeria';
import Ferias from './pages/Ferias';
import PrimeraFeria from './pages/PrimeraFeria';
import QuintaFeria from './pages/QuintaFeria';
import SegundaFeria from './pages/SegundaFeria';
import SextaFeria from './pages/SextaFeria';
import TerceraFeria from './pages/TerceraFeria';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routes> 
    <Route path='/ferias_steam' element={<Ferias/>}></Route>
    <Route path='/ferias' element={<Navigate replace to={"/ferias_steam"}/>}></Route>
    <Route path='/ferias_steam/primera' element={<PrimeraFeria/>}></Route>
    <Route path='/ferias_steam/segunda' element={<SegundaFeria/>}></Route>
    <Route path='/ferias_steam/tercera' element={<TerceraFeria/>}></Route>
    <Route path='/ferias_steam/cuarta' element={<CuartaFeria/>}></Route>
    <Route path='/ferias_steam/quinta' element={<QuintaFeria/>}></Route>
    <Route path='/ferias_steam/sexta' element={<SextaFeria/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
);

