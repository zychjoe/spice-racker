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
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const addToShoppingList = (newSpice: LibrarySpice) : void => {
    const newList = [...shoppingList];
    newList.push(newSpice);
    setShoppingList(newList);
  }

  const removeFromShoppingList = (index: number) : void => {
    const newList = [...shoppingList];
    newList.splice(index, 1);
    setShoppingList(newList);
  }

  return (
    <div>
      <h1>Shopping List</h1>
        {canEdit ?
         <div>
          {shoppingList.map((spice, index) => {
            return (
              <div key={index}>
                <p>{spice.name}</p>
                <SpiceyBtn
                  onClick={()=> console.log('inventory: ' + spice.name)}
                  btnText='Move to Inventory'
                />
                <SpiceyBtn
                  onClick={()=> removeFromShoppingList(index)}
                  btnText='Remove from List'
                />
              </div>
            );
              })}
          </div>
          :
          <div>
            <SpiceyBtn onClick={()=> addToShoppingList(props.library[0])} btnText="Add to Shopping List" />
            <SpiceyBtn onClick={()=> setCanEdit(true)} btnText="Edit Shopping List" />
            {shoppingList.map((spice, index) => <p key={index}>{spice.name}</p>)}
          </div>
        }
    </div>
  )
}

export default ShoppingList;