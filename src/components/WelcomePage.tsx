import SpiceyBtn from './SpiceyBtn';
import Display from '../interfaces/Display';
import './WelcomePage.css';

interface welcomeProps {
  setDisplay: React.Dispatch<React.SetStateAction<Display>>,
}

function WelcomePage(props: welcomeProps) {
  const { setDisplay } = props;

  return (
    <div>
      <h1>Welcome! Where would you like to go?</h1>
      <SpiceyBtn onClick={() => setDisplay(1)} btnText={'Inventory'} />
      <SpiceyBtn onClick={() => setDisplay(2)} btnText={'Shopping List'} />
      <SpiceyBtn onClick={() => setDisplay(3)} btnText={'Library'} />
    </div>
  );
}

export default WelcomePage;