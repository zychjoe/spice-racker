import LibrarySpice from '../interfaces/LibrarySpice';
import SpiceyBtn from './SpiceyBtn';
import './LibraryPage.css';

function LibraryPage(props: {libraryProp: LibrarySpice[]}) {

  return (
    <div>
      <h1>Library</h1>
      <SpiceyBtn onClick={()=> console.log('Spicey!')} btnText="Add to Library" />
      {props.libraryProp.map((spice) => <p>{spice.name}</p>)}
    </div>
  )
}

export default LibraryPage;