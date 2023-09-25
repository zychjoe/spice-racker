import LibrarySpice from '../interfaces/LibrarySpice';
import SpiceyBtn from './SpiceyBtn';
import './SpiceyModal.css';

interface modalProps {
  content: string[],
  onCancel: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  spiceVal: string | LibrarySpice,
  dateInfo: Date | null;
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