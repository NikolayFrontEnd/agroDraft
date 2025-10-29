import GoUpIcon from '../icons/GoUp';
import s from './index.module.scss';

export const ScrollToTopButton = ({ visible = false, onClick = () => {} }) => {
   if (!visible) return null;
   return (
    <div onClick={onClick} className={s.circleArrow}>
      <GoUpIcon />
    </div>
  );
};