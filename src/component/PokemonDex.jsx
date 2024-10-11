import React, { useState } from 'react';
import axios from 'axios';

function PokemonDex() {
  const [pokemon, setPokemon] = useState(null); // สถานะสำหรับเก็บข้อมูลโปเกมอน
  const [isLoading, setIsLoading] = useState(false); // สถานะสำหรับจัดการการโหลดข้อมูล
  const [searchTerm, setSearchTerm] = useState(''); // สถานะสำหรับเก็บคำค้นหาชื่อโปเกมอน

  const getRandomPokemon = async () => {
    setIsLoading(true); // ตั้งค่าสถานะเป็นกำลังโหลด
    try {
      let response;
      if (searchTerm) {
        // ถ้ามีคำค้นหา ให้ค้นหาจากชื่อโปเกมอนใน API
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      } else {
        // ถ้าไม่มีคำค้นหา ให้สุ่มโปเกมอนจากหมายเลข 1 ถึง 151
        const randomId = Math.floor(Math.random() * 151) + 1;
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      }
      setPokemon(response.data); // ตั้งค่าข้อมูลโปเกมอนที่ได้จาก API
    } catch (error) {
      console.error('Error fetching data:', error); // แสดงข้อความในกรณีที่เกิดข้อผิดพลาดในการดึงข้อมูล
    }
    setIsLoading(false); // ตั้งค่าสถานะเป็นเสร็จสิ้นการโหลด
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // อัปเดตคำค้นหาเมื่อผู้ใช้พิมพ์
  };

  const clearPokemon = () => {
    setPokemon(null); // ลบข้อมูลโปเกมอน
    setSearchTerm(''); // รีเซ็ตคำค้นหา
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">API Pokemon</h1>
      <div className="flex items-center space-x-2 mb-2"> 
        <input
          type="text"
          placeholder="Enter pokemon name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {pokemon && (
          <button
            onClick={clearPokemon}
            className="bg-red-500 text-white py-2 px-3 rounded hover:bg-red-600 transition"
          >
            Clear
          </button>
        )}
      </div>
      
      <div className="space-x-4">
        <button
          onClick={getRandomPokemon}
          className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600 transition mb-4 mt-2"
        >
          {isLoading ? 'Loading...' : 'Search or Get random Pokemon'}
        </button>
      </div>
      
      {pokemon && (
        <div className="p-4 bg-green-300 rounded shadow-md">
          <div className="flex">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <img src={pokemon.sprites.back_default} alt={pokemon.name} />
          </div>
          <h2 className="text-lg font-bold">Name: {pokemon.name.toUpperCase()}</h2>
          <p>Element 1: {pokemon.types[0].type.name}</p>
          {pokemon.types[1] && <p>Element 2: {pokemon.types[1].type.name}</p>}
          <p className="font-bold">Base stats:</p>
          <ul>
            {pokemon.stats.map((stat, idx) => (
              <li key={idx}>{stat.stat.name} = {stat.base_stat}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokemonDex;
