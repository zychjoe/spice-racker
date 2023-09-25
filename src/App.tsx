import { useState } from 'react';
import Inventory from './components/Inventory';
import LibraryPage from './components/LibraryPage';
import ShoppingList from './components/ShoppingList';
import LibraryModal from './components/LibraryModal';
import InventoryModal from './components/InventoryModal';
import LibrarySpice from './interfaces/LibrarySpice';
import InventorySpice from './interfaces/InventorySpice';
import logo from './logo.svg';
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

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////       STATE DEFINITIONS       /////////////////////////
  const [ library, setLibrary ] = useState<LibrarySpice[]>(initLibrary);
  const [ inventory, setInventory ] = useState<InventorySpice[]>(initInventory);
  const [ libModalIsOpen, setLibModalIsOpen] = useState<boolean>(false);
  const [ invModalIsOpen, setInvModalIsOpen] = useState<boolean>(false);



  /////////////////////////////////////////////////////////////////////////////
  /////////////////////            RENDER             /////////////////////////
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Inventory inventory={inventory} setInvModalIsOpen={setInvModalIsOpen} />
        {invModalIsOpen ?
          <InventoryModal
            setInvModalIsOpen={setInvModalIsOpen}
            inventory={inventory}
            setInventory={setInventory}
            library={library}
            setLibModalIsOpen={setLibModalIsOpen}
          />
          : null
        }
        <LibraryPage library={library} setLibModalIsOpen = {setLibModalIsOpen} />
        {libModalIsOpen ? 
          <LibraryModal
            toggle={setLibModalIsOpen}
            library={library}
            setLibrary={setLibrary}
          /> 
          : null
        }
        <ShoppingList library={library} />
      </header>
    </div>
  );
}

export default App;
