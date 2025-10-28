import ModalCrossIcon from "../icons/ModalCross";
import { ChemicalTable } from "./ChemicalTable";
import { CultureDropdown } from "./CultureDropdown";
import { CultureSelect } from "./CultureSelect";
import s from "./ModalChemicalModal.module.scss";
import { ModalInfo } from "./ModalInfo";
import { SearchInput } from "./SearchInput";

const ModalChemicalModal = ({ 
isOpen = false, 
onClose = () => {},
chemicals = [],
allFruits = [], 
fruitsData = {}}) => {
  if (!isOpen) return null; 

  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.crossWrapper} onClick={onClose}>
          <ModalCrossIcon />
        </div>
        <ModalInfo />
        <div className={s.modal__filters}>  
          <SearchInput />
          <div className={s.cultureSelectWrapper}>
            <CultureSelect />
             <CultureDropdown/>
          </div>
        </div>
        <ChemicalTable 
          chemicals={chemicals}
          allFruits={allFruits}
          fruitsData={fruitsData}
        />
      </div>
    </div>
  );
};

export default ModalChemicalModal;