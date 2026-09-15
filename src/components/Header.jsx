import { useState } from 'react';
import style from "../style/header.module.scss";
import logo from "../image/logo.jpg";

const Header = ({ setPage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (page) => {
        setPage(page);
        setIsOpen(false);
    };

    return (
        <header className={style.body}>
            <div className={style.body_logo}>
                <div className={style.logo} onClick={() => handleClick("home")}>
                    <img src={logo} alt="" className={style.image}/>
                </div>
            </div>

            <div className={style.right_side}>
                <nav className={style.menu}>
                    <p className={style.text1} onClick={() => handleClick('about')}>Обо мне</p>
                    <p className={style.text2} onClick={() => handleClick("faq")}>FAQ</p>
                    <p className={style.text3} onClick={() => handleClick("contacts")}>Контакты</p>
                    <p className={style.text4} onClick={() => handleClick("projects")}>Проекты</p>
                </nav>

                <div className={style.button_click}>
                    <div className={style.background}>
                        <p className={style.button_text}>Связаться</p>
                    </div>
                </div>

                <button 
                    className={style.burger} 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {isOpen && (
                <div className={style.mobile_menu}>
                    <p onClick={() => handleClick('about')}>Обо мне</p>
                    <p onClick={() => handleClick("faq")}>FAQ</p>
                    <p onClick={() => handleClick("contacts")}>Контакты</p>
                    <p onClick={() => handleClick("projects")}>Проекты</p>
                </div>
            )}
        </header>
    );
};

export default Header;