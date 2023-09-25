import logo from './logo.svg';
import LibrarySpice from './interfaces/LibrarySpice';
import InventorySpice from './interfaces/InventorySpice';
import { useState } from 'react';
import LibraryPage from './pages/LibraryPage';
import ShoppingList from './pages/ShoppingList';
import Inventory from './pages/Inventory';
import './App.css';
import LibraryModal from './pages/LibraryModal';
import InventoryModal from './pages/InventoryModal';

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
  const [ libModalIsOpen, setLibModalIsOpen] = useState<boolean>(false);
  const [ invModalIsOpen, setInvModalIsOpen] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Inventory inventoryProp={inventory} modalToggle={setInvModalIsOpen} />
        {invModalIsOpen ? <InventoryModal toggle={setInvModalIsOpen} inventory={inventory} setInventory={setInventory} library={library} toggleLibraryModal={setLibModalIsOpen}/> : null}
        <LibraryPage libraryProp={library} modalToggle = {setLibModalIsOpen} />
        {libModalIsOpen ? <LibraryModal toggle={setLibModalIsOpen} library={library} setLibrary={setLibrary}/> : null}
        <ShoppingList libraryProp={library} />
      </header>
    </div>
  );
}

export default App;
