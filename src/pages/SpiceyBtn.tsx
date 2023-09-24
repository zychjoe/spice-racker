import './SpiceyBtn.css'

interface btnProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void, 
  btnText: string,
}

function SpiceyBtn(props: btnProps) {
  const {onClick, btnText} = props;

  return(
    <button onClick={onClick}>{btnText}</button>
  );
}

export default SpiceyBtn;