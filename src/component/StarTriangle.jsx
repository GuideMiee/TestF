import React, { useState } from 'react';

function StarTriangle() {
  const [inputValue, setInputValue] = useState(''); // เก็บค่าที่พิมพ์ในกล่องข้อความ
  const [triangle, setTriangle] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // อัปเดตค่าที่พิมพ์
  };

  const handleButtonClick = () => {
    const number = Math.max(1, parseInt(inputValue)); // แปลงค่าที่พิมพ์เป็นจำนวนเต็มและป้องกันไม่ให้ต่ำกว่า 1
    let stars = '';

    // สร้างส่วนบนของสามเหลี่ยม
    for (let i = 1; i <= number; i++) {
      const numStars = 2 * i - 1;
      stars += '*'.repeat(numStars) + '\n'; // เพิ่มดาวในบรรทัดใหม่
    }

    // สร้างส่วนล่างของสามเหลี่ยม (ถ้าต้องการ)
    for (let i = number - 1; i > 0; i--) {
      const numStars = 2 * i - 1;
      stars += '*'.repeat(numStars) + '\n'; // เพิ่มดาวในบรรทัดใหม่
    }

    setTriangle(stars); // อัปเดตการแสดงผลดาว
  };
  const handleClearClick = () => {
    setInputValue(''); // ล้างค่า input
    setTriangle(''); // ล้างการแสดงผลดาว
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Star Display</h1>
      <input
        value={inputValue}
        onChange={handleInputChange}
        type="number"
        className="border rounded p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter number of stars"
        min="1"
      />
      <div className="flex space-x-2"> {/* เพิ่ม div สำหรับจัดเรียงปุ่ม */}
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Show Triangle
        </button>
        <button
          onClick={handleClearClick}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
        >
          Clear
        </button>
      </div>
      <pre className="mt-4 bg-white p-4 rounded shadow-md whitespace-pre-wrap border">
        {triangle}
      </pre>
    </div>
  );
}

export default StarTriangle;
