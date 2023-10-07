import { Url } from 'url';
import './PageJumpBtn.css'

interface buttonProps {
  onClick: React.MouseEventHandler<HTMLInputElement>,
  btnText: string,
  icon: string,
}

function PageJumpBtn( props: buttonProps) {
  const { onClick, btnText, icon } = props;

  return (
    <div className='page-jump-btn' onClick={onClick}>
      <img className='button-icon'src={icon} />
      <p className='button-text'>{btnText}</p>
      <div className='spacer'/>
    </div>
  )

}

export default PageJumpBtn