import SpiceyBtn from './SpiceyBtn';
import './SpiceyModal.css';

interface modalProps {
  content: string[],
  onCancel: () => void,
  onSubmit: () => void, 
}

function SpiceyModal(props: modalProps) {
  const { content, onCancel, onSubmit } = props;
  return (
    <div>
      {content.map((query: string) => <div><p>{query}</p><input /></div>)}
      <SpiceyBtn onClick={onCancel} btnText={"Cancel"}/>
      <SpiceyBtn onClick={onSubmit} btnText={"Submit"}/>
    </div>

  );
}

export default SpiceyModal;