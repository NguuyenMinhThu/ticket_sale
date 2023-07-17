import React from 'react';
import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import DoiSoatVe from './Pages/DoiSoatVe';
import DSVe from './Pages/DSVe';
import Trangchu from './Pages/Trangchu';
import Caidat from './Pages/Caidat';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>   
      <Route path="/ve" element={<DoiSoatVe />} />
      <Route path="/test" element={<DSVe />} />
      <Route path="/" element={<Trangchu />} />
      <Route path="/caidat" element={<Caidat />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
