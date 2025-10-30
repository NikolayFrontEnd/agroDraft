import ArrowDownIcon from '../../icons/ArrowDown'
import ArrowUpIcon from '../../icons/ArrowUp'
import s from './index.module.scss'

export const CultureSelect = ({ toggleFruitsDropdown, isOpen = false, selectedFruits = [] }) => {
  const label = selectedFruits.length === 0 ? 'Не выбрано' : selectedFruits.join(', ');

  return (
    <div onClick={toggleFruitsDropdown} className={s.cultureSelect}>
      <div className={s.cultureSelect__label}>Культуры</div>

      <div className={s.cultureSelect__trigger}>
        <div className={selectedFruits.length===0 ? s.cultureSelect__value : s.cultureSelected__value} title={label}>
          {label}
        </div>
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </div>
    </div>
  );
};