import { Url } from 'url';
import './PageJumpBtn.css'

interface buttonProps {
  onClick: React.MouseEventHandler<HTMLInputElement>,
  btnText: string,
  pageToLink: string,
}

function PageJumpBtn( props: buttonProps) {
  const { onClick, btnText, pageToLink } = props;

  return (
    <div className={pageToLink + " page-jump-btn"} onClick={onClick}>
      <p className='button-text'>{btnText}</p>
    </div>
  )

}

export default PageJumpBtn