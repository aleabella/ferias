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
    <Route path='/ferias' element={<Ferias/>}></Route>
    <Route path='/ferias' element={<Navigate replace to={"/ferias"}/>}></Route>
    <Route path='/ferias/primera' element={<PrimeraFeria/>}></Route>
    <Route path='/ferias/segunda' element={<SegundaFeria/>}></Route>
    <Route path='/ferias/tercera' element={<TerceraFeria/>}></Route>
    <Route path='/ferias/cuarta' element={<CuartaFeria/>}></Route>
    <Route path='/ferias/quinta' element={<QuintaFeria/>}></Route>
    <Route path='/ferias/sexta' element={<SextaFeria/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
);

