import s from './index.module.scss'

export const ModalInfo = () => {
    
return (
        <div className={s.info}>
            <div className={s.info__title}>МДУ ИНФО</div>
            <div className={s.info__description}>
                Значение указаны в мг/кг свежей продукции
            </div>
        </div>
    )
}