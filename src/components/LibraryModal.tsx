import { useState } from "react";
import SpiceyBtn from "./SpiceyBtn";
import LibrarySpice from "../interfaces/LibrarySpice";
import moment from "moment";
import "./LibraryModal.css"

interface modalProps {
  toggle: React.Dispatch<React.SetStateAction<boolean>>,
  library: LibrarySpice[],
  setLibrary: React.Dispatch<React.SetStateAction<LibrarySpice[]>>,
}

function LibraryModal( props: modalProps ) {

  const { toggle, library, setLibrary } = props
  const [ newSpice, setNewSpice ] = useState<string>('');
  const [ newDuration, setNewDuration ] = useState<moment.Duration>(moment.duration(undefined))

  const onCancel = () => {
    setNewSpice('');
    toggle(false);
  }

  const onSubmit = ()=> {
    if (!newSpice) {
      setNewSpice('');
      console.log(library.length)
      toggle(false); 
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
      toggle(false);
    }
  }

  return (
    <form>
      <div>
        <label>
          Spice: 
          <input value={newSpice} onChange={(e) => setNewSpice(e.target.value)} ></input>
        </label>
      </div>
      <div>
        <label>
          Shelf Life: 
          <input disabled={true} />
        </label>
      </div>
      <SpiceyBtn onClick={onCancel} btnText={"Cancel"}/>
      <SpiceyBtn onClick={onSubmit} btnText={"Submit"}/>
    </form>
  );
}

export default LibraryModal;