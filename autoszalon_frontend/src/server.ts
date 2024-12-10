// server.ts
import express from 'express';

const app = express();
const port = 3000;

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

const cars: Car[] = [
  {
    brand: 'Toyota',
    type: 'Sedan',
    year: 2022,
    price: 20000,
    fuel: 'Hybrid',
    colors: ['Red', 'Blue', 'Black'],
    category: 'Family',
    wheels: 'Alloy',
    tires: 'All-season',
    rims: '18 inch',
    brakes: 'Disc',
    image: 'path/to/toyota.jpg'
  },
  {
    brand: 'BMW',
    type: 'SUV',
    year: 2021,
    price: 50000,
    fuel: 'Diesel',
    colors: ['White', 'Black'],
    category: 'Sport',
    wheels: 'Alloy',
    tires: 'Performance',
    rims: '20 inch',
    brakes: 'Disc',
    image: 'path/to/bmw.jpg'
  }
];

app.get('/api/cars', (req, res) => {
  res.json(cars);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});