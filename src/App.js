import React from 'react';
import NavBar from './components/NavBar';
import PizzaGrid from './components/PizzaGrid';
import './App.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';

function App() {
  return (
   <div>
     <NavBar/>
     <PizzaGrid/>
     </div>
  );
}

export default App;
