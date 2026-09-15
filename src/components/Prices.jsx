import style from "../style/prices.module.scss";

const Prices = () => {
    return (
        <div className={style.prices}>
            <h2 className={style.title}>Цены</h2>
            <div className={style.cards}>
                <div className={style.card}>
                    <h3>Лендинг</h3>
                    <p className={style.price}>от 5 000 ₽</p>
                    <p className={style.desc}>Одна страница, адаптив, форма связи.</p>
                </div>
                <div className={`${style.card} ${style.background}`}>
                    <h3>Магазин</h3>
                        <p className={style.price}>от 20 000 ₽</p>
                        <p className={style.desc}>Интернет-магазин с нуля.</p>
                </div>
                <div className={style.card}>
                    <h3>Поддержка</h3>
                    <p className={style.price}>от 3 000 ₽/мес</p>
                    <p className={style.desc}>Слежу за сайтом после сдачи.</p>
                </div>
            </div>
        </div>
    );
};

export default Prices;