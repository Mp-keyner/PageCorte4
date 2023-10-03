// MyContext.js
import { createContext, useState, useContext } from 'react';

// Crear el contexto
const MyContext = createContext();

// Crear el proveedor del contexto
const MyContextProvider = ({ children }) => {
  const [myState, setMyState] = useState('Valor inicial');

  const updateState = (newValue) => {
    setMyState(newValue);
  };

  return (
    <MyContext.Provider value={{ myState, updateState }}>
      {children}
    </MyContext.Provider>
  );
};

// Crear un hook personalizado para usar el contexto
const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext debe ser usado dentro de un MyContextProvider');
  }
  return context;
};

export { MyContextProvider, useMyContext };
