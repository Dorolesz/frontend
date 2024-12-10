import React from 'react';

const parts = [
  'Engine',
  'Transmission',
  'Brakes',
  'Suspension',
  'Exhaust',
  'Tires',
  'Rims'
];

const Parts: React.FC = () => {
  return (
    <div className="container mt-4">
      <h2>Alkatrészek</h2>
      <ul className="list-group">
        {parts.map((part, index) => (
          <li className="list-group-item" key={index}>{part}</li>
        ))}
      </ul>
    </div>
  );
};

export default Parts;