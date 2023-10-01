import LibrarySpice from '../interfaces/LibrarySpice';
import InventorySpice from '../interfaces/InventorySpice';
import SpiceyBtn from './SpiceyBtn';
import ProceedModal from './ProceedModal';
import InventoryModal from './InventoryModal';
import { useState } from 'react';
import './ShoppingList.css';

interface shoppinglistProps {
  library: LibrarySpice[], 
  inventory: InventorySpice[],
  setInventory: React.Dispatch<React.SetStateAction<InventorySpice[]>>,
  setLibModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

function ShoppingList(props: shoppinglistProps) {
  const { library, inventory, setInventory, setLibModalIsOpen } = props

  // THIS IS PLACEHOLDER DUMMY DATA //
  //TODO: localstorage
  const initShoppingList = [
    library[2],
    library[3],
    library[4],
  ]
  
  const [shoppingList, setShoppingList] = useState<LibrarySpice[]>(initShoppingList);
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const [proceedModalReveals, setProceedModalReveals] = useState<boolean[]>(
    new Array(shoppingList.length).fill(false)
  )
  const [inventoryModalReveals, setInventoryModalReveals] = useState<boolean[]>(
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

  const handleInvModalReveal= (index: number) : void => {
    const newInvReveals = [...inventoryModalReveals];
    newInvReveals[index] = !newInvReveals[index];
    setInventoryModalReveals(newInvReveals);
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
                  {inventoryModalReveals[index]? 
                    <InventoryModal
                      setInvModalIsOpen={() => handleInvModalReveal(index)}
                      inventory={inventory}
                      setInventory={setInventory}
                      library={library}
                      setLibModalIsOpen={setLibModalIsOpen}
                      spiceToAdd={shoppingList[index]}
                      removeFromShoppingList={() => removeFromShoppingList(index)}
                    />
                  :
                    null
                  }
                  <p>{spice.name}</p>
                  <SpiceyBtn
                    onClick={()=> handleInvModalReveal(index)}
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