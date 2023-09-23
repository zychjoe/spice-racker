import React from 'react';
import logo from './logo.svg';
import LibrarySpice from './interfaces/LibrarySpice';
import InventorySpice from './interfaces/InventorySpice';
import { useState } from 'react';
import LibraryPage from './pages/LibraryPage';
import ShoppingList from './pages/ShoppingList';
import Inventory from './pages/Inventory';
import './App.css';

// THIS IS PLACEHOLDER DUMMY DATA //
//TODO: Initial database
//TODO: localstorage
//TODO: implement shelfLife using Date math
//TODO: image handling
const initLibrary: LibrarySpice[] = [
  {
    name:  "Cilantro",
    shelfLife: null,
    image: null,
  },
  {
    name:  "Oregano",
    shelfLife: null,
    image: null,
  },
  {
    name:  "Cinnamon",
    shelfLife: null,
    image: null,
  },
  {
    name:  "Nutmeg",
    shelfLife: null,
    image: null,
  },
  {
    name:  "Star Anise",
    shelfLife: null,
    image: null,
  },
  {
    name:  "Old Bay",
    shelfLife: null,
    image: null,
  },
  {
    name:  "Thyme, Dried",
    shelfLife: null,
    image: null,
  },

]


// THIS IS PLACEHOLDER DUMMY DATA //
//TODO: localstorage
//TODO: implement expDate using Date math
const initInventory : InventorySpice[] = [
  {
    spice: initLibrary[1],
    expDate: null
  }
]

function App() {
  const [ library, setLibrary ] = useState<LibrarySpice[]>(initLibrary);
  const [ inventory, setInventory ] = useState<InventorySpice[]>(initInventory);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Inventory inventoryProp={inventory} />
        <LibraryPage libraryProp={library} />
        <ShoppingList libraryProp={library} />
      </header>
    </div>
  );
}

export default App;
