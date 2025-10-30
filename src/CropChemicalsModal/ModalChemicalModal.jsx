import { useState, useRef } from "react";
import ModalCrossIcon from "../icons/ModalCross";
import { ChemicalTable } from "./ChemicalTable";
import { CultureDropdown } from "./CultureDropdown";
import { CultureSelect } from "./CultureSelect";
import s from "./ModalChemicalModal.module.scss";
import { ModalInfo } from "./ModalInfo";
import { SearchInput } from "./SearchInput";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { ScrollToTopButton } from "../ScrollToTop";

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
  const modalRef = useRef(null);
  const { showButton, scrollToTop } = useScrollToTop(300, modalRef);

  const toggleFruitsDropdown = () => {
    setOpen(!open);
  }

  return (
    <div className={s.overlay} onClick={onClose}>
      <div
        className={s.modal}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={s.crossWrapper} onClick={onClose}>
          <ModalCrossIcon />
        </div>
        <ModalInfo />
        <div className={s.modal__filters}>  
          <SearchInput handleChemicalSearch={handleChemicalSearch} />
          <div className={s.cultureSelectWrapper}>
            <CultureSelect toggleFruitsDropdown={toggleFruitsDropdown} isOpen={open}   selectedFruits={selectedFruits}/>
            {open && (
              <CultureDropdown 
                allFruits={allFruits}
                selectedFruits={selectedFruits}
                toggleFruitSelection={toggleFruitSelection}
                isFruitSelectionDisabled={isFruitSelectionDisabled}
              />
            )}
          </div>
        </div>
        <ChemicalTable 
          chemicals={chemicals}
          allFruits={displayedFruits}
          fruitsData={fruitsData}
        />
        <ScrollToTopButton visible={showButton} onClick={scrollToTop} />
      </div>
    </div>
  )
}

export default ModalChemicalModal;
