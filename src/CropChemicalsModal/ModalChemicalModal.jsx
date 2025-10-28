import ModalCrossIcon from "../icons/ModalCross";
import { ChemicalTable } from "./ChemicalTable";
import { CultureDropdown } from "./CultureDropdown";
import { CultureSelect } from "./CultureSelect";
import s from "./ModalChemicalModal.module.scss";
import { ModalInfo } from "./ModalInfo";
import { SearchInput } from "./SearchInput";

const ModalChemicalModal = ({ isOpen = false, onClose = () => {} }) => {
  if (!isOpen) return null; 

  return (
    <div className={s.overlay} onClick={onClose}>

      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.crossWrapper} onClick={onClose}>
        <ModalCrossIcon />
        </div>
        <ModalInfo />
        <div className = {s.modal__filters}>  
        <SearchInput />
        <CultureSelect />
         </div>
         <CultureDropdown/>
        <ChemicalTable />
      </div>
    </div>
  );
};

export default ModalChemicalModal;