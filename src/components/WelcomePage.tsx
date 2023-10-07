import SpiceyBtn from './SpiceyBtn';
import Display from '../interfaces/Display';
import './WelcomePage.css';
import PageJumpBtn from './PageJumpBtn';

interface welcomeProps {
  setDisplay: React.Dispatch<React.SetStateAction<Display>>,
}

function WelcomePage(props: welcomeProps) {
  const { setDisplay } = props;

  return (
    <div>
      <h1>Welcome!</h1>
      <PageJumpBtn
        onClick={() => setDisplay(1)}
        btnText='Inventory'
        icon='inventory_icon.png'
      />
      <PageJumpBtn
        onClick={() => setDisplay(2)}
        btnText='Shopping List'
        icon='shoppinglist_icon.png'
      />
      <PageJumpBtn
        onClick={() => setDisplay(3)}
        btnText='Library'
        icon='library_icon.png'
      />
    </div>
  );
}

export default WelcomePage;