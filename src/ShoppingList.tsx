import LibrarySpice from './interfaces/LibrarySpice';
import { useState } from 'react';
import './ShoppingList.css';

function ShoppingList() {

  const initShoppingList = [
    {
      name:  "Nutmeg",
      shelfLife: null,
      image: null,
    },
    {
      name:  "Star Anise",
      shelfLife: null,
      image: null,
    },
    {
      name:  "Old Bay",
      shelfLife: null,
      image: null,
    },
    {
      name:  "Thyme, Dried",
      shelfLife: null,
      image: null,
    },
  ]
  
  const [shoppingList, setShoppingList] = useState<LibrarySpice[]>(initShoppingList);

  return (
    <div>
      <h1>Shopping List</h1>
      {shoppingList.map((spice) => <p>{spice.name}</p>)}
    </div>
  )
}

export default ShoppingList;