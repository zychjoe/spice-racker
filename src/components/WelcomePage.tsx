import Display from '../interfaces/Display';
import PageJumpBtn from './PageJumpBtn';
import './WelcomePage.css';

interface welcomeProps {
  setDisplay: React.Dispatch<React.SetStateAction<Display>>,
}

function WelcomePage(props: welcomeProps) {
  const { setDisplay } = props;

  return (
    <div>
      <PageJumpBtn
        onClick={() => setDisplay(1)}
        btnText='Inventory'
        pageToLink='inventory-jump'
      />
      <PageJumpBtn
        onClick={() => setDisplay(2)}
        btnText='Shopping List'
        pageToLink='shoppinglist-jump'
      />
      <PageJumpBtn
        onClick={() => setDisplay(3)}
        btnText='Library'
        pageToLink='library-jump'
      />
    </div>
  );
}

export default WelcomePage;