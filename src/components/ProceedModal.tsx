import './ProceedModal.css'
import SpiceyBtn from './SpiceyBtn';

interface modalProps {
  prompt: string,
  cancelFunc: (event: React.MouseEvent<HTMLButtonElement>) => void,
  cancelText?: string,
  submitFunc: (event: React.MouseEvent<HTMLButtonElement>) => void,
  submitText?: string
}

function ProceedModal(props: modalProps) {

  const { prompt, cancelFunc, cancelText, submitFunc, submitText } = props;

  return(
    <div className='modal'>
      <p>{prompt}</p>
      <SpiceyBtn onClick={cancelFunc} btnText={cancelText? cancelText : 'Cancel'} />
      <SpiceyBtn onClick={submitFunc} btnText={submitText? submitText : 'Submit'} />
    </div>
  )

}

export default ProceedModal;