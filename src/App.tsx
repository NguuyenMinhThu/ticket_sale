import React from 'react';
import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Danhsachve from './Page1/Danhsachve';
import Doisoatve from './Page1/Doisoatve';
import DSVe from './Pages/DSVe';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>   
      <Route path="/dsv" element={<Danhsachve />} />
      <Route path="/doisoatve" element={<Doisoatve />} />
      <Route path="/test" element={<DSVe />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
