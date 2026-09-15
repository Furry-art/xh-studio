import { useState, useRef, useEffect } from 'react';
import style from "../style/hero.module.scss";
import girl from "../image/k1.png";

const slides = [
    { title: "Сайты без воды", subtitle: "Лендинги, магазины, поддержка", button: "Обсудить проект", page: "contacts" },
    { title: "Быстро и дёшево", subtitle: "Срок от 3 дней. Цена от 5 000 ₽", button: "Посмотреть цены"},
    { title: "С душой", subtitle: "Не шаблон. Делаю под тебя", button: "Посмотреть работы", page: "projects" }
];

const Hero = ({setPage}) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState('left');
    const [isMobile, setIsMobile] = useState(false);
    const [, setIsOpen] = useState(false);

    const handleClick = (page) => {
        setPage(page);
        setIsOpen(false);
    };
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
                    <div className={style.image}>
                        <img src={girl} alt="" className={style.bgGirl1}/>
                        <img src={girl} alt="" className={style.bgGirl2}/>
                        <img src={girl} alt="" className={style.bgGirl3}/>
                    </div>
                    <button className={style.button} onClick={() => handleClick(slide.page)}>{slide.button}</button>
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