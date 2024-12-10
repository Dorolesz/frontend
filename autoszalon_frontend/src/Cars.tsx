import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Car {
  brand: string;
  type: string;
  year: number;
  price: number;
  fuel: string;
  colors: string[];
  category: string;
  wheels: string;
  tires: string;
  rims: string;
  brakes: string;
  image: string;
}

const Cars: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([{
      brand: 'Tesla',
      type: 'Model S',
      year: 2021,
      price: 79999,
      fuel: 'Electric',
      colors: ['Red', 'White', 'Black'],
      category: 'Sedan',
      wheels: 'Alloy',
      tires: 'All-season',
      rims: '19 inch',
      brakes: 'Disc',
      image: 'https://example.com/tesla-model-s.jpg'
    }]);
  
    useEffect(() => {
      axios.get('http://localhost:3000/api/cars')
        .then(response => {
          setCars(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the car data!', error);
        });
    }, []);
  
    return (
      <div className="container mt-4">
        <h2>Autók</h2>
        <div className="row">
          {cars.map((car, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={car.image} className="img-fluid rounded-start" alt={`${car.brand} ${car.type}`} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{car.brand} {car.type}</h5>
                      <p className="card-text" style={{ fontSize: '0.9rem' }}>
                        Gyártás éve: {car.year}<br />
                        Beszerzési ár: ${car.price}<br />
                        Üzemanyag: {car.fuel}<br />
                        Színek: {car.colors.join(', ')}<br />
                        Kategória: {car.category}<br />
                        Kerekek: {car.wheels}<br />
                        Gumik: {car.tires}<br />
                        Felnik: {car.rims}<br />
                        Fékek: {car.brakes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Cars;