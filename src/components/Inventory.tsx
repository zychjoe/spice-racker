import InventorySpice from "../interfaces/InventorySpice";
import SpiceyBtn from "./SpiceyBtn";
import './Inventory.css';

interface inventoryProps {
  inventory: InventorySpice[],
  setInvModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Inventory(props: inventoryProps) {
  const { inventory, setInvModalIsOpen } = props;

  return (
    <div>
      <h1>Inventory</h1>
      <SpiceyBtn onClick={() => setInvModalIsOpen(true)} btnText="Add a Spice" />
      {inventory.map((spice, index) => <div><p key={index}>{spice.spice.name}</p><SpiceyBtn onClick={()=>console.log(spice.expDate)} btnText="exp" /></div>)}
    </div>
  );
}

export default Inventory;