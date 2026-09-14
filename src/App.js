import { useState } from 'react';
import style from "./style/app.module.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import Services from "./components/Services";
import Prices from "./components/Prices";
import About from "./components/About";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import useScrollReveal from './hooks/useScrollReveal';
import Contacts from './components/Contacts';

function App() {
    const [page, setPage] = useState('home');
    useScrollReveal(page);

    return (
        <div className={style.body}>
            <Header setPage={setPage} />
            {page === 'home' && (
                <>
                    <div data-reveal><Hero /></div>
                    <div data-reveal><Divider /></div>
                    <div data-reveal><Services /></div>
                    <div data-reveal><Prices /></div>
                    <div data-reveal><Projects/></div>
                    <div data-reveal><FAQ /></div>
                </>
            )}
            {page === 'about' && <About />}
            {page === 'faq' && <FAQ />}
            {page === 'projects' && <Projects />}
            {page === 'contacts' && <Contacts />}
            <Footer />
        </div>
    );
}

export default App;