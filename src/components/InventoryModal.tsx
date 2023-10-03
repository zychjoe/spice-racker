import { useState } from "react";
import SpiceyBtn from "./SpiceyBtn";
import LibrarySpice from "../interfaces/LibrarySpice";
import InventorySpice from "../interfaces/InventorySpice";
import "./InventoryModal.css"
import moment, { MomentInput } from "moment";

interface modalProps {
  setInvModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  inventory: InventorySpice[],
  setInventory: React.Dispatch<React.SetStateAction<InventorySpice[]>>,
  library: LibrarySpice[],
  setLibModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  spiceToAdd? : LibrarySpice, //Used when called by ShoppingList
  removeFromShoppingList?: () => void, //Used when called by ShoppingList
}

function InventoryModal( props: modalProps ) {

  const { 
    setInvModalIsOpen,
    inventory,
    setInventory,
    library,
    setLibModalIsOpen,
    spiceToAdd,
    removeFromShoppingList
  } = props;
  
  const [ newSpice, setNewSpice ] = useState<LibrarySpice | undefined>(spiceToAdd? spiceToAdd : undefined);

  const onCancel = () => {
    setNewSpice(undefined);
    setInvModalIsOpen(false);
  }

  const setExpDateByShelfLife = ()  : MomentInput => {
    if (!newSpice || !newSpice.shelfLife) {
      return null;
    }
    
    const today = moment();
    today.add(newSpice.shelfLife);
    return(today);
  }

  const onSubmit = (): void => {

    if (newSpice === undefined) {
      setInvModalIsOpen(false);
    }

    else {
      const newInventory = [...inventory];
      const newExpDate = setExpDateByShelfLife();
      newInventory.push({
        spice: newSpice,
        expDate: newExpDate,
      });
      setInventory(newInventory);
      setInvModalIsOpen(false);
      if (removeFromShoppingList) {
        removeFromShoppingList();
      }
    }
  }

  return (
    <div>
      <div>
        {spiceToAdd?
          <p>Move {spiceToAdd.name} to Inventory?</p>
        :
          <label>
            Select a Spice: 
            <select  onChange={(e) => setNewSpice(library.find((spice) => spice.name === e.target.value))} >
              <option value=''>CHOOSE A SPICE</option>
              {library.map((spice, index) => <option key={index} value={spice.name}>{spice.name}</option>)}
            </select>
          </label>
        }
      </div>
      <div>
        <label>
          Expiration Date: 
          <input disabled={true} />
        </label>
      </div>
      <SpiceyBtn onClick={onCancel} btnText={"Cancel"}/>
      <SpiceyBtn onClick={onSubmit} btnText={"Submit"}/>
      {spiceToAdd?
        null
      :
        <div>
          <p>Or Add a Spice to the Library:</p>
          <SpiceyBtn onClick={() => setLibModalIsOpen(true)} btnText="Add Spice" />
        </div>
      }
    </div>
  );
}

export default InventoryModal;