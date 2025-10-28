import SearchIcon from "../../icons/Search"
import s from './index.module.scss'

export const SearchInput = () => {
  return (
<div className={s.search}>
      <SearchIcon  />
      <input 
        className={s.search__input} 
        type="text"
        placeholder="активное вещество"
      />
</div>
  );
};