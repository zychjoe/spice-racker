import LibrarySpice from './interfaces/LibrarySpice';
import './LibraryPage.css';

function LibraryPage(props: {libraryProp: LibrarySpice[]}) {

  return (
    <div>
      <h1>Library</h1>
      {props.libraryProp.map((spice) => <p>{spice.name}</p>)}
    </div>
  )
}

export default LibraryPage;