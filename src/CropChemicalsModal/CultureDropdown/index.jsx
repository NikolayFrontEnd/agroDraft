import s from './index.module.scss';

export const CultureDropdown = ({ 
  allFruits = [],
  selectedFruits = [], 
  toggleFruitSelection = () => {} ,
  isFruitSelectionDisabled,
}) => {
  return (
    <div className={s.cultureDropdown}>
      {allFruits.map((fruit) => (
        <label className={s.cultureDropdown__item} key={fruit}>
          <input 
            className={s.cultureDropdown__checkbox} 
            type="checkbox"
            checked={selectedFruits.includes(fruit)}       
            onChange={() => toggleFruitSelection(fruit)}
            disabled={isFruitSelectionDisabled && !selectedFruits.includes(fruit)}
          />
          {fruit}
        </label>
      ))}
    </div>
  );
};