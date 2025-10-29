import { useState } from "react";
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
  displayedFruits = [], 
  selectedFruits = [], 
  fruitsData = {},
  handleChemicalSearch = () => {},
  toggleFruitSelection = () => {},
  isFruitSelectionDisabled,
}) => {
  if (!isOpen) return null; 

  const [open, setOpen] = useState(false);

  const toggleFruitsDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.crossWrapper} onClick={onClose}>
          <ModalCrossIcon />
        </div>
        <ModalInfo />
        <div className={s.modal__filters}>  
          <SearchInput 
            handleChemicalSearch={handleChemicalSearch}
          />
          <div className={s.cultureSelectWrapper}>
            <CultureSelect toggleFruitsDropdown={toggleFruitsDropdown} />
            {open && (
              <CultureDropdown 
                allFruits={allFruits}
                selectedFruits={selectedFruits}
                toggleFruitSelection={toggleFruitSelection}
                isFruitSelectionDisabled = {isFruitSelectionDisabled }
              />
            )}
          </div>
        </div>
        <ChemicalTable 
          chemicals={chemicals}
          allFruits={displayedFruits}
          fruitsData={fruitsData}
        />
      </div>
    </div>
  );
};

export default ModalChemicalModal;