import { useState } from 'react';
import Inventory from './components/Inventory';
import LibraryPage from './components/LibraryPage';
import ShoppingList from './components/ShoppingList';
import LibrarySpice from './interfaces/LibrarySpice';
import InventorySpice from './interfaces/InventorySpice';
import Display from './interfaces/Display';
import WelcomePage from './components/WelcomePage';
import moment from 'moment';
import './App.css';

// THIS IS PLACEHOLDER DUMMY DATA //
//TODO: Initial database
//TODO: localstorage
//TODO: implement shelfLife using Date math
//TODO: image handling
const initLibrary: LibrarySpice[] = [
  {
    name:  "Cilantro",
    shelfLife: moment.duration({years: 2 }),
    image: null,
  },
  {
    name:  "Oregano",
    shelfLife: undefined,
    image: null,
  },
  {
    name:  "Cinnamon",
    shelfLife: moment.duration({years: 2 }),
    image: null,
  },
  {
    name:  "Nutmeg",
    shelfLife: moment.duration({years: 2 }),
    image: null,
  },
  {
    name:  "Star Anise",
    shelfLife: moment.duration({years: 2 }),
    image: null,
  },
  {
    name:  "Old Bay",
    shelfLife: undefined,
    image: null,
  },
  {
    name:  "Thyme, Dried",
    shelfLife: undefined,
    image: null,
  },

]


// THIS IS PLACEHOLDER DUMMY DATA //
//TODO: localstorage
//TODO: implement expDate using Date math
const initInventory : InventorySpice[] = [
  {
    spice: initLibrary[1],
    expDate: moment(),
  }
]

function App() {

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////       STATE DEFINITIONS       /////////////////////////
  const [ library, setLibrary ] = useState<LibrarySpice[]>(initLibrary);
  const [ inventory, setInventory ] = useState<InventorySpice[]>(initInventory);
  const [ display, setDisplay ] = useState<Display>(0);

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////            RENDER             /////////////////////////
  let displayedElement;

  switch(display){
    case 1:
      displayedElement=
        <Inventory
          inventory={inventory}
          setInventory={setInventory}
          library={library}
          setLibrary={setLibrary}
          backToWelcomePage={() => setDisplay(0)}
        />
      break;
    case 2:
      displayedElement=
        <ShoppingList
          library={library}
          setLibrary={setLibrary}
          inventory={inventory}
          setInventory={setInventory}
          backToWelcomePage={() => setDisplay(0)}
        />
      break;
    case 3:
      displayedElement=
        <LibraryPage
          library={library}
          setLibrary={setLibrary}
          backToWelcomePage={() => setDisplay(0)}
        />
      break;
    case 0:
    default:
      displayedElement =  <WelcomePage setDisplay={setDisplay} />
      break;
  }

  return (
    <div className="App">
        {displayedElement}
    </div>
  );
}

export default App;
