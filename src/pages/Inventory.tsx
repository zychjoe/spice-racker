import InventorySpice from "../interfaces/InventorySpice";
import LibrarySpice from "../interfaces/LibrarySpice";
import SpiceyBtn from "./SpiceyBtn";
import { useState } from "react";
import './Inventory.css';

function Inventory(props: {inventoryProp: InventorySpice[]}) {

  return (
    <div>
      <h1>Inventory</h1>
      <SpiceyBtn onClick={()=> console.log('Spicey!')} btnText="Add a Spice" />
      {props.inventoryProp.map((spice) => <p>{spice.spice.name}</p>)}
    </div>
  );
}

export default Inventory;