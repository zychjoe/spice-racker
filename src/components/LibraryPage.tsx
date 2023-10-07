import LibrarySpice from '../interfaces/LibrarySpice';
import SpiceyBtn from './SpiceyBtn';
import LibraryModal from './LibraryModal';
import { useState } from 'react';
import './LibraryPage.css';

interface libraryProps {
  library: LibrarySpice[],
  setLibrary: React.Dispatch<React.SetStateAction<LibrarySpice[]>>,
  backToWelcomePage: () => void,
}

function LibraryPage(props: libraryProps) {
  const { library, setLibrary, backToWelcomePage } = props;
  const [ libModalIsOpen, setLibModalIsOpen] = useState<boolean>(false);

  let modalDisplay;
  if (libModalIsOpen) {
    modalDisplay = 
      <LibraryModal
        setLibModalIsOpen={setLibModalIsOpen}
        library={library}
        setLibrary={setLibrary}
      /> 
  }
  else {
    modalDisplay = 
      <SpiceyBtn onClick={()=> setLibModalIsOpen(true)} btnText="Add to Library" icon='add' />
  }

  return (
    <div>
      <h1>Library</h1>
      {modalDisplay}
      {library.map((spice, index) => <p key={index}>{spice.name}</p>)}
      <SpiceyBtn onClick={backToWelcomePage} btnText="Back" icon='arrow_back' />
    </div>
  )
}

export default LibraryPage;