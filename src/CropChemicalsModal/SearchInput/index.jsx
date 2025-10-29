import SearchIcon from "../../icons/Search"
import s from './index.module.scss'

export const SearchInput = ({handleChemicalSearch}) => {
  return (
<div className={s.search}>
      <SearchIcon  />
      <input 
        className={s.search__input} 
        type="text"
        placeholder="активное вещество"
        onChange = {handleChemicalSearch}
      />
</div>
  );
};