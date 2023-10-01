import LibrarySpice from '../interfaces/LibrarySpice';
import SpiceyBtn from './SpiceyBtn';
import ProceedModal from './ProceedModal';
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
  const [proceedModalReveals, setProceedModalReveals] = useState<boolean[]>(
    new Array(shoppingList.length).fill(false)
  )
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

  const handleRemoveClick = (index: number) : void => {
    const newModalReveals = [...proceedModalReveals];
    newModalReveals[index] = !newModalReveals[index];
    setProceedModalReveals(newModalReveals);
  }

  const handleSubmitClick = (index: number) : void => {
    removeFromShoppingList(index);
    handleRemoveClick(index);
  }

  return (
    <div>
      <h1>Shopping List</h1>
        {canEdit ?
          <div>
            {shoppingList.map((spice, index) => {
              return (
                <div key={index}>
                  {proceedModalReveals[index]? 
                    <ProceedModal
                      prompt='Are you sure you want to remove this spice?'
                      cancelFunc={() => handleRemoveClick(index)}
                      submitFunc={() => handleSubmitClick(index)}
                      submitText='Remove'
                    />
                  :
                    null
                  }
                  <p>{spice.name}</p>
                  <SpiceyBtn
                    onClick={()=> console.log('inventory: ' + spice.name)}
                    btnText='Move to Inventory'
                  />
                  <SpiceyBtn
                    onClick={() => handleRemoveClick(index)}
                    btnText='Remove from List'
                  />
                </div>
              );
            })}
            <SpiceyBtn
              onClick={()=> setCanEdit(false)}
              btnText='Stop Editing'
            />
          </div>
        :
          <div>
            <SpiceyBtn
              onClick={()=> addToShoppingList(props.library[0])}
              btnText="Add to Shopping List"
            />
            <SpiceyBtn
              onClick={()=> setCanEdit(true)}
              btnText="Edit Shopping List"
            />
            {shoppingList.map((spice, index) => <p key={index}>{spice.name}</p>)}
          </div>
        }
    </div>
  )
}

export default ShoppingList;