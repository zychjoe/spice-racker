import LibrarySpice from '../interfaces/LibrarySpice';
import InventorySpice from '../interfaces/InventorySpice';
import SpiceyBtn from './SpiceyBtn';
import ProceedModal from './ProceedModal';
import InventoryModal from './InventoryModal';
import ShoppingModal from './ShoppingModal';
import { useState } from 'react';
import './ShoppingModal.css';

interface shoppinglistProps {
  library: LibrarySpice[], 
  setLibrary: React.Dispatch<React.SetStateAction<LibrarySpice[]>>,
  inventory: InventorySpice[],
  setInventory: React.Dispatch<React.SetStateAction<InventorySpice[]>>,
  backToWelcomePage: () => void,
}

function ShoppingList(props: shoppinglistProps) {
  const { library, setLibrary, inventory, setInventory, backToWelcomePage } = props

  // THIS IS PLACEHOLDER DUMMY DATA //
  //TODO: localstorage
  const initShoppingList = [
    library[2],
    library[3],
    library[4],
  ]
  
  const [shoppingList, setShoppingList] = useState<LibrarySpice[]>(initShoppingList);
  const [shoppingModalIsOpen, setShoppingModalIsOpen] = useState<boolean>(false);
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const [proceedModalReveals, setProceedModalReveals] = useState<boolean[]>(
    new Array(shoppingList.length).fill(false)
  )
  const [inventoryModalReveals, setInventoryModalReveals] = useState<boolean[]>(
    new Array(shoppingList.length).fill(false)
  )

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
            <SpiceyBtn
              onClick={()=> setShoppingModalIsOpen(true)}
              btnText="Add to Shopping List"
              icon='add'
            />
            {shoppingModalIsOpen?
              <ShoppingModal
                library={library}
                shoppingList={shoppingList}
                setShoppingList={setShoppingList}
                setShoppingModalIsOpen={setShoppingModalIsOpen}
              />
            :
              null
            }
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
                      setLibrary={setLibrary}
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
                    icon='shopping_bag'
                  />
                  <SpiceyBtn
                    onClick={() => handleRemoveClick(index)}
                    btnText='Remove from List'
                    icon='delete'
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
              onClick={()=> setCanEdit(true)}
              btnText="Edit Shopping List"
              icon="edit_note"
            />
            {shoppingList.map((spice, index) => <p key={index}>{spice.name}</p>)}
          </div>
        }
      <SpiceyBtn onClick={backToWelcomePage} btnText="Back" icon="arrow_back" />
    </div>
  )
}

export default ShoppingList;