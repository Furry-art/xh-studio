import style from "../style/about.module.scss";
import cat5 from "../image/cat1.png";

const About = () => {
    return (
        <div className={style.about}>
            <div className={style.left}>
                <h2 className={style.title}>Обо мне</h2>
                <p className={style.text}>
                    Мне 19. Делаю сайты сам — без студий, без шаблонов, без воды.
                </p>
                <p className={style.text}>
                    Использую ИИ, чтобы было быстро и недорого. Не бросаю после сдачи.
                </p>
                <p className={style.text}>
                    Если нужен сайт — пиши. Обсудим.
                </p>
            </div>
            <div className={style.right}>
                <img src={cat5} alt="" className={style.cat} />
            </div>
        </div>
    );
};

export default About;