import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeCard from './CoffeCard';

const Home = () => {
  const introCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(introCoffees)
  return (
    <div>
      <h1>home</h1>
      <div className='grid grid-cols-3 gap-6 md:grid-cols-2'>
        {
          coffees.map((coffee, index) => <CoffeCard 
          key={index}
          coffees={coffees}
          setCoffees={setCoffees}
           coffee={coffee}
           ></CoffeCard>)
        }
      </div>
    </div>
  );
};

export default Home;