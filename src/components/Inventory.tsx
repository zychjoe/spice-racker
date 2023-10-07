import InventorySpice from "../interfaces/InventorySpice";
import SpiceyBtn from "./SpiceyBtn";
import InventoryModal from "./InventoryModal";
import { useState } from "react";
import './Inventory.css';
import LibrarySpice from "../interfaces/LibrarySpice";

interface inventoryProps {
  inventory: InventorySpice[],
  setInventory: React.Dispatch<React.SetStateAction<InventorySpice[]>>,
  library: LibrarySpice[],
  setLibrary: React.Dispatch<React.SetStateAction<LibrarySpice[]>>,
  backToWelcomePage: () => void,
}

function Inventory(props: inventoryProps) {
  const { inventory, setInventory, library, setLibrary, backToWelcomePage } = props;
  const [ invModalIsOpen, setInvModalIsOpen] = useState<boolean>(false);

  let modalDisplay;

  if(invModalIsOpen) {
    modalDisplay =
      <InventoryModal
        setInvModalIsOpen={setInvModalIsOpen}
        inventory={inventory}
        setInventory={setInventory}
        library={library}
        setLibrary={setLibrary}
      />
  }

  else {
    modalDisplay =
      <SpiceyBtn onClick={() => setInvModalIsOpen(true)} btnText="Add a Spice" icon='add' />
  }

  return (
    <div>
      <h1>Inventory</h1>
      {modalDisplay}
      {inventory.map((spice, index) => <p key={index}>{spice.spice.name}</p>)}
      <SpiceyBtn onClick={backToWelcomePage} btnText="Back" icon='arrow_back' />
    </div>
  );
}

export default Inventory;