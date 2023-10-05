import { useState } from 'react';
import Inventory from './components/Inventory';
import LibraryPage from './components/LibraryPage';
import ShoppingList from './components/ShoppingList';
import LibraryModal from './components/LibraryModal';
import InventoryModal from './components/InventoryModal';
import LibrarySpice from './interfaces/LibrarySpice';
import InventorySpice from './interfaces/InventorySpice';
import moment from 'moment';
import logo from './logo.svg';
import './App.css';
import SpiceyBtn from './components/SpiceyBtn';
import Display from './interfaces/Display';
import WelcomePage from './components/WelcomePage';

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
  const [ libModalIsOpen, setLibModalIsOpen] = useState<boolean>(false);
  const [ display, setDisplay ] = useState<Display>(0);



  /////////////////////////////////////////////////////////////////////////////
  /////////////////////            RENDER             /////////////////////////
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { display === 0 ? <WelcomePage setDisplay={setDisplay} /> : null}
        { display === 1 ? 
          <div>
            <Inventory
              inventory={inventory}
              setInventory={setInventory}
              library={library}
              backToWelcomePage={() => setDisplay(0)}
              setLibModalIsOpen={setLibModalIsOpen}
            />
          </div>
          :
          null
        }
        { display === 2 ?       
          <ShoppingList
            library={library}
            inventory={inventory}
            setInventory={setInventory}
            setLibModalIsOpen={setLibModalIsOpen}
            backToWelcomePage={() => setDisplay(0)}
          />
          :
          null
        }
        { display === 3 ?
          <div>
            <LibraryPage
              library={library}
              setLibModalIsOpen = {setLibModalIsOpen}
              backToWelcomePage={() => setDisplay(0)}
            />
            {libModalIsOpen ? 
              <LibraryModal
                toggle={setLibModalIsOpen}
                library={library}
                setLibrary={setLibrary}
              /> 
              : null
            }
          </div>
          :
          null
        }
      </header>
    </div>
  );
}

export default App;
