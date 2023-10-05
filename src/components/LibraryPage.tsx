import LibrarySpice from '../interfaces/LibrarySpice';
import SpiceyBtn from './SpiceyBtn';
import './LibraryPage.css';

interface libraryProps {
  library: LibrarySpice[],
  setLibModalIsOpen:  React.Dispatch<React.SetStateAction<boolean>>,
  backToWelcomePage: () => void,
}

function LibraryPage(props: libraryProps) {
  const { library, setLibModalIsOpen, backToWelcomePage } = props;

  return (
    <div>
      <h1>Library</h1>
      <SpiceyBtn onClick={()=> setLibModalIsOpen(true)} btnText="Add to Library" />
      {library.map((spice, index) => <p key={index}>{spice.name}</p>)}
      <SpiceyBtn onClick={backToWelcomePage} btnText="Back" />
    </div>
  )
}

export default LibraryPage;