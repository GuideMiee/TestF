import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // ใช้ Routes แทน Switch
import StarTriangle from './component/StarTriangle';
import PokemonDex from './component/PokemonDex';
import Resume from './component/Resume'; 
import Navbar from "./component/Navbar";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/StarTriangle" element={<StarTriangle />} /> {/* ใช้ element เป็น JSX */}
          <Route path="/pokemondex" element={<PokemonDex />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/StarTriangle" element={<StarTriangle />} /> {/* จัดให้ StarTriangle แสดงที่หน้าแรก */}
          <Route path="/" element={<Navigate to="StarTriangle" />} />
        </Routes>
      </div>
    </Router>
  );
}
