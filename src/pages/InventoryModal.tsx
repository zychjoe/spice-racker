import { useState } from "react";
import SpiceyBtn from "./SpiceyBtn";
import LibrarySpice from "../interfaces/LibrarySpice";
import InventorySpice from "../interfaces/InventorySpice";
import "./InventoryModal.css"

interface modalProps {
  toggle: React.Dispatch<React.SetStateAction<boolean>>,
  inventory: InventorySpice[],
  setInventory: React.Dispatch<React.SetStateAction<InventorySpice[]>>,
  library: LibrarySpice[],
  toggleLibraryModal: React.Dispatch<React.SetStateAction<boolean>>,
}

function InventoryModal( props: modalProps ) {

  const { toggle, inventory, setInventory, library, toggleLibraryModal } = props
  const [ newSpiceName, setNewSpiceName ] = useState<string>('');

  const onCancel = () => {
    setNewSpiceName('');
    toggle(false);
  }

  const onSubmit = ()=> {
    if (!newSpiceName) {
      setNewSpiceName('');
      toggle(false);
    }
    else {
      const newInventory = [...inventory];
      const newSpice = library.find((spice) => spice.name === newSpiceName);
      newInventory.push({
        spice: newSpice ? newSpice : {name: "ERROR", shelfLife: null, image: null},
        expDate: null,
      });
      console.log(newInventory.length)
      setInventory(newInventory);
      toggle(false);
    }
  }

  return (
    <div>
      <form>
        <div>
          <label>
            Select a Spice: 
            <select  onChange={(e) => setNewSpiceName(e.target.value)} >
              {library.map((spice) => <option value={spice.name}>{spice.name}</option>)}
            </select>
          </label>
        </div>
        <div>
          <label>
            Expiration Date: 
            <input disabled={true} />
          </label>
        </div>
        <SpiceyBtn onClick={onCancel} btnText={"Cancel"}/>
        <SpiceyBtn onClick={onSubmit} btnText={"Submit"}/>
      </form>
      <div>
        <p>Or Add a Spice to the Library:</p>
        <SpiceyBtn onClick={() => toggleLibraryModal(true)} btnText="Add Spice" />
      </div>
    </div>
  );
}

export default InventoryModal;