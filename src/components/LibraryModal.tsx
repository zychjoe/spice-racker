import { useState } from "react";
import SpiceyBtn from "./SpiceyBtn";
import LibrarySpice from "../interfaces/LibrarySpice";
import moment from "moment";
import "./LibraryModal.css"
import ShelfLifePicker from "./ShelfLifePicker";

interface modalProps {
  setLibModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  library: LibrarySpice[],
  setLibrary: React.Dispatch<React.SetStateAction<LibrarySpice[]>>,
}

function LibraryModal( props: modalProps ) {

  const { setLibModalIsOpen, library, setLibrary } = props
  const [ newSpice, setNewSpice ] = useState<string>('');
  const [ newDuration, setNewDuration ] = useState<moment.Duration>(moment.duration(undefined))

  const onCancel = () => {
    setNewSpice('');
    setLibModalIsOpen(false);
  }

  const onSubmit = ()=> {
    if (!newSpice) {
      setNewSpice('');
      console.log(library.length)
      setLibModalIsOpen(false); 
    }
    else {
      const newLibrary = [...library];
      newLibrary.push({
        name: newSpice,
        shelfLife: newDuration,
        image: null,
      });
      console.log(newLibrary.length)
      setLibrary(newLibrary);
      setLibModalIsOpen(false);
    }
  }

  return (
    <div>
      <div>
        <label>
          Spice: 
          <input value={newSpice} onChange={(e) => setNewSpice(e.target.value)} ></input>
        </label>
      </div>
      <div>
        <ShelfLifePicker shelfLifeDuration={newDuration} setShelfLifeDuration={setNewDuration} />
      </div>
      <SpiceyBtn onClick={onCancel} btnText={"Cancel"}/>
      <SpiceyBtn onClick={onSubmit} btnText={"Submit"}/>
    </div>
  );
}

export default LibraryModal;