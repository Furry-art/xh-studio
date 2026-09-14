import { useState } from 'react';
import style from "../style/faq.module.scss";

const faqData = [
    {
        q: "Сколько стоит сайт?",
        a: "Лендинг — от 5 000 ₽. Магазин — от 20 000 ₽. Поддержка — от 3 000 ₽/мес."
    },
    {
        q: "Сколько по времени?",
        a: "Лендинг — 3–5 дней. Магазин — 7–14 дней."
    },
    {
        q: "Что нужно от меня?",
        a: "Идея, тексты, логотип (если есть). Остальное — моя работа."
    },
    {
        q: "А если не понравится?",
        a: "Правки бесплатно до результата. Пока не скажешь «ок»."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={style.faq}>
            <h2 className={style.title}>Частые вопросы</h2>
            <div className={style.list}>
                {faqData.map((item, index) => (
                    <div key={index} className={style.item}>
                        <div className={style.question} onClick={() => toggle(index)}>
                            <p>{item.q}</p>
                            <span>{openIndex === index ? '−' : '+'}</span>
                        </div>
                        {openIndex === index && (
                            <div className={style.answer}>
                                <p>{item.a}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;