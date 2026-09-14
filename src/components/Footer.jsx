import style from "../style/footer.module.scss";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.left}>
                <p className={style.logo}>xh studio</p>
                <p className={style.copy}>© 2026. Сайты без воды.</p>
            </div>
            <div className={style.right}>
                <a href="mailto:xhdhfhcbfx@gmail.com" className={style.link}>
                    xhdhfhcbfx@gmail.com
                </a>
                <a href="#" className={style.link}>Telegram</a>
            </div>
        </footer>
    );
};

export default Footer;