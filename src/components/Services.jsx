import { useState, useEffect } from 'react';
import style from "../style/services.module.scss";
import cat2 from "../image/k2.png";
import cat3 from "../image/k3.png";
import cat4 from "../image/k4.png";

const codeText = `import React from 'react';
import style from "../style/serv.scss";

const Services = () => {
    return (
        <div className="site">
            <h1>Без воды</h1>
            <p>Быстро. Дёшево.</p>
        </div>
    );
};

export default Services;`;


const Services = () => {
    const [displayed, setDisplayed] = useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayed(codeText.slice(0, i));
            i++;
            if (i > codeText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={style.services}>
            <div className={style.left}>
                <h2 className={style.services_title}>Что я делаю</h2>
                <div className={style.list}>
                    <div className={style.item}>
                        <img src={cat2} alt="" className={style.cat} />
                        <div className={style.text}>
                            <h3>Лендинги</h3>
                            <p>Быстро, дёшево, под ключ</p>
                        </div>
                    </div>
                    <div className={style.item} >
                        <img src={cat3} alt="" className={style.cat} />
                        <div className={style.text}>
                            <h3>Интернет-магазины</h3>
                            <p>Каталог, корзина, оплата</p>
                        </div>
                    </div>
                    <div className={style.item}>
                        <img src={cat4} alt="" className={style.cat} />
                        <div className={style.text}>
                            <h3>Поддержка</h3>
                            <p>Правки, обновления, не бросаю</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.code_block}>
                    <div className={style.code_header}>
                        <span className={style.dot}></span>
                        <span className={style.dot}></span>
                        <span className={style.dot}></span>
                    </div>
                    <pre className={style.code}>
                        <code>{displayed}<span className={style.cursor}>|</span></code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Services;