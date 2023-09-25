import LibrarySpice from '../interfaces/LibrarySpice';
import SpiceyBtn from './SpiceyBtn';
import { useState } from 'react';
import './ShoppingList.css';

function ShoppingList(props: {library: LibrarySpice[]}) {

  // THIS IS PLACEHOLDER DUMMY DATA //
  //TODO: localstorage
  const initShoppingList = [
    props.library[2],
    props.library[3],
    props.library[4],
  ]
  
  const [shoppingList, setShoppingList] = useState<LibrarySpice[]>(initShoppingList);

  return (
    <div>
      <h1>Shopping List</h1>
      <SpiceyBtn onClick={()=> console.log('Spicey!')} btnText="Edit Shopping List" />
      {shoppingList.map((spice) => <p>{spice.name}</p>)}
    </div>
  )
}

export default ShoppingList;