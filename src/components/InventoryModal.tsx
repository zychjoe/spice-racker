import { useState } from "react";
import SpiceyBtn from "./SpiceyBtn";
import LibrarySpice from "../interfaces/LibrarySpice";
import InventorySpice from "../interfaces/InventorySpice";
import "./InventoryModal.css"
import moment, { MomentInput } from "moment";
import LibraryModal from "./LibraryModal";

interface modalProps {
  setInvModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  inventory: InventorySpice[],
  setInventory: React.Dispatch<React.SetStateAction<InventorySpice[]>>,
  library: LibrarySpice[],
  setLibrary: React.Dispatch<React.SetStateAction<LibrarySpice[]>>,
  spiceToAdd? : LibrarySpice, //Used when called by ShoppingList
  removeFromShoppingList?: () => void, //Used when called by ShoppingList
}

function InventoryModal( props: modalProps ) {

  const { 
    setInvModalIsOpen,
    inventory,
    setInventory,
    library,
    setLibrary,
    spiceToAdd,
    removeFromShoppingList
  } = props;
  
  const [ newSpice, setNewSpice ] = useState<LibrarySpice | undefined>(spiceToAdd? spiceToAdd : undefined);
  const [ libModalIsOpen, setLibModalIsOpen] = useState<boolean>(false);

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

  let spiceSelection;
  let libraryOption;
  if (spiceToAdd) {
    spiceSelection = <p>Move {spiceToAdd.name} to Inventory?</p>;
    libraryOption = null;
  }
  else {
    spiceSelection = 
      <label>
        Select a Spice: 
        <select  onChange={(e) => setNewSpice(library.find((spice) => spice.name === e.target.value))} >
          <option value=''>CHOOSE A SPICE</option>
          {library.map((spice, index) => <option key={index} value={spice.name}>{spice.name}</option>)}
        </select>
      </label>;
    if (libModalIsOpen) {
      libraryOption = 
        <LibraryModal 
          setLibModalIsOpen={setLibModalIsOpen}
          library={library}
          setLibrary={setLibrary}
        />
    }
    else{
      libraryOption = 
        <SpiceyBtn
          onClick={() => setLibModalIsOpen(true)}
          btnText="Or Add a Spice to the Library"
        />
    }
  }

  return (
    <div className="modal">
      <h1>Add to Inventory</h1>
      {spiceSelection}
      <div>
        <label>
          Expiration Date: 
          <input disabled={true} />
        </label>
      </div>
      {libraryOption}
      <div className="cancel-submit-bar">
        <SpiceyBtn onClick={onCancel} btnText={"Cancel"} icon='cancel' />
        <SpiceyBtn onClick={onSubmit} btnText={"Submit"} icon='done' />
      </div>
    </div>
  );
}

export default InventoryModal;