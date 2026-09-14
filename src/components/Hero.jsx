import { useState, useRef, useEffect } from 'react';
import style from "../style/hero.module.scss";
import cat1 from "../image/cat2.png";

const slides = [
    { title: "Сайты без воды", subtitle: "Лендинги, магазины, поддержка", button: "Обсудить проект" },
    { title: "Быстро и дёшево", subtitle: "Срок от 3 дней. Цена от 5 000 ₽", button: "Посмотреть цены" },
    { title: "С душой", subtitle: "Не шаблон. Делаю под тебя", button: "Посмотреть работы" }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState('left');
    const [isMobile, setIsMobile] = useState(false);
    const startX = useRef(null);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const onTouchStart = (e) => {
        if (!isMobile) return;
        startX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e) => {
        if (!isMobile || startX.current === null) return;
        const diff = startX.current - e.changedTouches[0].clientX;

        if (diff > 50 && current < slides.length - 1) {
            setDirection('left');
            setCurrent(current + 1);
        } else if (diff < -50 && current > 0) {
            setDirection('right');
            setCurrent(current - 1);
        }
        startX.current = null;
    };

    const slide = isMobile ? slides[current] : slides[0];

    return (
        <div
            className={style.hero}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <div
                className={`${style.slide} ${direction === 'left' ? style.slide_left : style.slide_right}`}
                key={`${current}-${direction}`}
            >
                <div className={style.info_block}>
                    <h1 className={style.title}>{slide.title}</h1>
                    <p className={style.subtitle}>{slide.subtitle}</p>
                    <button className={style.button}>{slide.button}</button>
                </div>
                <div className={style.image}>
                    <img className={style.cat1} src={cat1} alt="" />
                </div>
            </div>

            {isMobile && (
                <div className={style.dots}>
                    {slides.map((_, i) => (
                        <span key={i} className={i === current ? style.dot_active : style.dot}></span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Hero;