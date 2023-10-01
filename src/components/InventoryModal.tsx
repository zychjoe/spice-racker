import { useState } from "react";
import SpiceyBtn from "./SpiceyBtn";
import LibrarySpice from "../interfaces/LibrarySpice";
import InventorySpice from "../interfaces/InventorySpice";
import "./InventoryModal.css"

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
  } = props
  
  const [ newSpiceName, setNewSpiceName ] = useState<string>('');

  const onCancel = () => {
    setNewSpiceName('');
    setInvModalIsOpen(false);
  }

  const onSubmit = ()=> {

    if (!newSpiceName && !spiceToAdd) {
      setNewSpiceName('');
      setInvModalIsOpen(false);
    }

    else {
      const newInventory = [...inventory];
      const newSpice = spiceToAdd? spiceToAdd : library.find((spice) => spice.name === newSpiceName);
      newInventory.push({
        spice: newSpice ? newSpice : {name: "ERROR", shelfLife: null, image: null},
        expDate: null,
      });
      console.log(newInventory.length)
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
          <p>{spiceToAdd.name}</p>
        :
          <label>
            Select a Spice: 
            <select  onChange={(e) => setNewSpiceName(e.target.value)} >
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