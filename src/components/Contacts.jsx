import style from "../style/contacts.module.scss";

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={style.left}>
                <h2 className={style.title}>Контакты</h2>
                <div className={style.list}>
                    <a href="mailto:xhdhfhcbfx@gmail.com" className={style.item}>
                        <span className={style.label}>Почта</span>
                        <span className={style.value}>xhdhfhcbfx@gmail.com</span>
                    </a>
                    <a href="https://t.me/div_h1" className={style.item} target="_blank" rel="noreferrer">
                        <span className={style.label}>Telegram</span>
                        <span className={style.value}>@div_h1</span>
                    </a>
                    <a href="tel:+79127018780" className={style.item}>
                        <span className={style.label}>Телефон</span>
                        <span className={style.value}>+7 912 701-87-80</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contacts;