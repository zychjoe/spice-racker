import SpiceyModal from "./SpiceyModal";
import "./LibraryModal.css"

interface modalProps {
  isOpen: boolean,
  toggle: React.Dispatch<React.SetStateAction<boolean>>,
}

function LibraryModal( props: modalProps ) {

  const { isOpen, toggle } = props
  const content = [
    "Spice Name",
    "Shelf Life",
  ]

  const onCancel = () => console.log("Cancel");
  const onSubmit = ()=> console.log("Submit");

  return (
    <SpiceyModal content={content} onCancel={onCancel} onSubmit={onSubmit}/>
  );
}

export default LibraryModal;