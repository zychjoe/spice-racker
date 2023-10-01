import './SpiceyBtn.css'

interface btnProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void, 
  btnText: string,
  disabled?: boolean,
}

function SpiceyBtn(props: btnProps) {
  const {onClick, btnText, disabled} = props;

  return(
    <button onClick={onClick} disabled={ disabled ? false : disabled}>
      {btnText}
    </button>
  );
}

export default SpiceyBtn;