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
  backToWelcomePage: () => void,
  setLibModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

function Inventory(props: inventoryProps) {
  const { inventory, setInventory, library, backToWelcomePage, setLibModalIsOpen } = props;
  const [ invModalIsOpen, setInvModalIsOpen] = useState<boolean>(false);

  let modalDisplay;

  if(invModalIsOpen) {
    modalDisplay =
      <InventoryModal
        setInvModalIsOpen={setInvModalIsOpen}
        inventory={inventory}
        setInventory={setInventory}
        library={library}
        setLibModalIsOpen={setLibModalIsOpen} //TODO move libmodal logic into invmodal
      />
  }

  else {
    modalDisplay =
      <SpiceyBtn onClick={() => setInvModalIsOpen(true)} btnText="Add a Spice" />
  }

  return (
    <div>
      <h1>Inventory</h1>
      {modalDisplay}
      {inventory.map((spice, index) => <div><p key={index}>{spice.spice.name}</p><SpiceyBtn onClick={()=>console.log(spice.expDate)} btnText="exp" key={index + 100} /></div>)}
      <SpiceyBtn onClick={backToWelcomePage} btnText="Back" />
    </div>
  );
}

export default Inventory;