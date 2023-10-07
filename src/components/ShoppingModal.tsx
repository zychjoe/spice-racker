import { useState } from 'react';
import LibrarySpice from '../interfaces/LibrarySpice';
import SpiceyBtn from './SpiceyBtn';
import './ShoppingModal.css';

interface modalProps {
  library: LibrarySpice[],
  shoppingList: LibrarySpice[],
  setShoppingList: React.Dispatch<React.SetStateAction<LibrarySpice[]>>,
  setShoppingModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}


function ShoppingModal(props: modalProps) {
  const { library, shoppingList, setShoppingList, setShoppingModalIsOpen } = props;

  const [ newSpice, setNewSpice ] = useState<LibrarySpice | undefined>(undefined);

  //TODO: better fail condition
  const onSubmit = () => {
    if (newSpice) {
      const newShoppingList = [...shoppingList];
      newShoppingList.push(newSpice);
      setShoppingList(newShoppingList);
      setShoppingModalIsOpen(false);
    }
    else {
      console.log('No NEW SPICE')
    }
  }
  return (
    <div>
      <label>
        Select a Spice: 
        <select  onChange={(e) => setNewSpice(library.find((spice) => spice.name === e.target.value))} >
          <option value=''>CHOOSE A SPICE</option>
          {library.map((spice, index) => <option key={index} value={spice.name}>{spice.name}</option>)}
        </select>
      </label>
      <SpiceyBtn onClick={onSubmit} btnText='Add To Shopping List' />
    </div>
  );
}

export default ShoppingModal;