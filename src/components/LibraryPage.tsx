import LibrarySpice from '../interfaces/LibrarySpice';
import SpiceyBtn from './SpiceyBtn';
import './LibraryPage.css';

interface libraryProps {
  library: LibrarySpice[],
  setLibModalIsOpen:  React.Dispatch<React.SetStateAction<boolean>>
}

function LibraryPage(props: libraryProps) {
  const { library, setLibModalIsOpen } = props;

  return (
    <div>
      <h1>Library</h1>
      <SpiceyBtn onClick={()=> setLibModalIsOpen(true)} btnText="Add to Library" />
      {library.map((spice) => <p>{spice.name}</p>)}
    </div>
  )
}

export default LibraryPage;