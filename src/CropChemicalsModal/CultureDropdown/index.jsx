import s from './index.module.scss'

export const CultureDropdown = () => {
  const allFruits = [
    'almond',
    'hazelnut',
    'nuts',
    'apple',
    'pear',
    'quince',
    'apricot',
    'cherry',
    'peach',
    'plum',
    'table_grapes',
    'technical_grapes',
    'strawberry',
    'blackberry',
    'raspberry',
    'blueberry',
  ];

  return (
    <div className={s.cultureDropdown}>
      {allFruits.map((fruit) => (
        <label className={s.cultureDropdown__item} key={fruit}>
          <input className={s.cultureDropdown__checkbox} type="checkbox" />
          {fruit}
        </label>
      ))}
    </div>
  );
};