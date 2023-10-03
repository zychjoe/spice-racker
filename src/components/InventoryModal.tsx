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
  const [ newExpDate, setNewExpDate ] = useState<MomentInput | null>(null);

  const onCancel = () => {
    setNewSpice(undefined);
    setInvModalIsOpen(false);
  }

  const setExpDateByShelfLife = () => {
    if (!newSpice || !newSpice.shelfLife) {
      console.log("BUG OUT");
      setNewExpDate(null);
    }
    else {
      const today = moment();
      if (newSpice.shelfLife.days) {
        today.add(newSpice.shelfLife.days, 'days');
        console.log('SL days: ' + newSpice.shelfLife.days);
        console.log(today);
      }
      if (newSpice.shelfLife.months) {
        today.add(newSpice.shelfLife.months, 'months');
        console.log('SL mos: ' + newSpice.shelfLife.months);
        console.log(today);
      }
      if (newSpice.shelfLife.years) {
        today.add(newSpice.shelfLife.years, 'years');
        console.log('SL years: ' + newSpice.shelfLife.years);
        console.log('Today year: ');
        console.log(today);
      }
      console.log('Bout to set!')
      setNewExpDate(today.toObject());
    }
  }

  const onSubmit = (): void => {

    if (newSpice === undefined) {
      setInvModalIsOpen(false);
    }

    else {
      const newInventory = [...inventory];
      setExpDateByShelfLife();
      console.log(newExpDate);
      console.log('^^^^^^^^^^^^^')
      newInventory.push({
        spice: newSpice,
        expDate: newExpDate,
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