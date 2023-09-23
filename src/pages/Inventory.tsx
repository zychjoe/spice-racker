import InventorySpice from "../interfaces/InventorySpice";
import LibrarySpice from "../interfaces/LibrarySpice";
import { useState } from "react";
import './Inventory.css';

function Inventory(props: {inventoryProp: InventorySpice[]}) {

  return (
    <div>
      <h1>Inventory</h1>
      {props.inventoryProp.map((spice) => <p>{spice.spice.name}</p>)}
    </div>
  );
}

export default Inventory;