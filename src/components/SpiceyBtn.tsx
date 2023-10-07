import './SpiceyBtn.css'

interface btnProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void, 
  btnText: string,
  icon?: string,
  disabled?: boolean,
}

function SpiceyBtn(props: btnProps) {
  const {onClick, btnText, icon, disabled} = props;

  return(
    <button className='spicey-button' onClick={onClick} disabled={ disabled ? false : disabled}>
      {icon? <span className="material-symbols-outlined">{icon}</span> : btnText}
    </button>
  );
}

export default SpiceyBtn;