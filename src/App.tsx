import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

interface LibrarySpice {
  name: String,
  shelfLife: Number | null,
  image: null,
}

interface InventorySpice {
  spice: LibrarySpice,
  expDate: Date | null,
}

const beginningLibrary: Array<LibrarySpice> = [
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

]

const beginningInventory : Array<InventorySpice> = [
  {
    spice: beginningLibrary[1],
    expDate: null
  }
]

function App() {
  const [ library, setLibrary ] = useState<Array<LibrarySpice>>(beginningLibrary);
  const [ inventory, setInventory ] = useState<Array<InventorySpice>>(beginningInventory);



  console.log(library);
  console.log(inventory);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
