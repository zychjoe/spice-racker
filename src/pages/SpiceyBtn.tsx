import './SpiceyBtn.css'

interface btnProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void, 
  btnText: string,

}

function SpiceyBtn(props: btnProps ) {
  return(
    <button onClick={props.onClick}>{props.btnText}</button>
  );
}

export default SpiceyBtn;