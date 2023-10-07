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
    <div className="modal">
      <h1>Add to the Library</h1>
      <div className="library-modal-content">
        <div className="spice-name-input">
          <p> Spice Name: </p>
          <input value={newSpice} onChange={(e) => setNewSpice(e.target.value)} ></input>
        </div>
        <ShelfLifePicker shelfLifeDuration={newDuration} setShelfLifeDuration={setNewDuration} />
      </div>
      <div className="cancel-submit-bar">
        <SpiceyBtn onClick={onCancel} btnText={"Cancel"} icon='cancel' />
        <SpiceyBtn onClick={onSubmit} btnText={"Submit"} icon='done' />
      </div>
    </div>
  );
}

export default LibraryModal;