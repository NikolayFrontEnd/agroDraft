import s from './index.module.scss';

export const ChemicalTable = ({ chemicals = [], allFruits = [], fruitsData = {} }) => {
  if (allFruits.length === 0 || chemicals.length === 0 ) return null;
  return (
    <div className={s.tableWrapper}>
      <div className={s.table}>
        <div className={s.table__head}>
          <div className={s.table__headerCell}>Активное вещество</div>
          {allFruits.map((fruit) => (
            <div key={fruit} className={s.table__headerCell}>
              {fruit}
            </div>
          ))}
        </div>
        <div className={s.table__body}>
          {chemicals.map((chemical) => (
            <div key={chemical} className={s.table__row}>
              <div className={s.table__chemicalCell}>{chemical}</div>
              {allFruits.map((fruit) => (
                <div key={fruit} className={s.table__cell}>
                  {fruitsData[chemical]?.[fruit] ?? 'Нет МДУ'}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};