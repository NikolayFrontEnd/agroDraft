import ArrowDownIcon from '../../icons/ArrowDown'
import s from './index.module.scss'

export const CultureSelect = ({toggleFruitsDropdown}) => {
    
    return (
<div onClick = {toggleFruitsDropdown}className={s.cultureSelect}>
          <div className={s.cultureSelect__label}>Культуры</div>
      <div className={s.cultureSelect__trigger}>
<div>Не выбрано</div>
        <ArrowDownIcon/>     
        </div>
</div>
    )
}