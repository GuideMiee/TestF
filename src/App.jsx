import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // ใช้ Routes แทน Switch
import StarTriangle from './component/StarTriangle';
import PokemonDex from './component/PokemonDex';
import ResponsiveResume from './component/Resume'; 
import Navbar from "./component/navbar";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/StarTriangle" element={<StarTriangle />} /> {/* ใช้ element เป็น JSX */}
          <Route path="/pokemondex" element={<PokemonDex />} />
          <Route path="/ResponsiveResume" element={<ResponsiveResume />} />
          <Route path="/StarTriangle" element={<StarTriangle />} /> {/* จัดให้ StarTriangle แสดงที่หน้าแรก */}
          <Route path="*" element={<Navigate to="StarTriangle" />} />
        </Routes>
        <div className="flex">Welcome</div>
      </div>
    </Router>
  );
}
