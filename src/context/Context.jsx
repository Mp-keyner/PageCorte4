// MyContext.js
import { createContext, useState } from 'react';
import useCounter from '../hook/useCounter';

// Crear el contexto
export const MyContext = createContext();

// Crear el proveedor del contexto en este caso MyContextProvider
export const MyContextProvider = ({ children }) => {
  const [myState, setMyState] = useState('Valor final');
  const contadorGlobal = useCounter()
  const {counter, Increment} = contadorGlobal
  return (
    <MyContext.Provider value={{ myState, counter, Increment }}>
      {children}
    </MyContext.Provider>
  );
};

