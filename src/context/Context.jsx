import { createContext, useState } from 'react';
export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
 
  const nombre = 'keyner'
  const Cosas = [
    {
      Product: {
        id: 1,
        name: 'Football',
        price: 49.99,
      },
    },
    {
      Product: {
        id: 2,
        name: 'Baseball',
        price: 9.99,
      },
    },
    {
      Product: {
        id: 3,
        name: 'B  asketball',
        price: 29.99,
      },
    },
  ];
  const [Product, setProduct] = useState(Cosas)
  return (
    <MyContext.Provider value={{ nombre, Product, setProduct }}>
      {children}
    </MyContext.Provider>
  );
};
