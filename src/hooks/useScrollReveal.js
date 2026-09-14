import { useEffect } from 'react';

const useScrollReveal = (page) => {
    useEffect(() => {
        const elements = document.querySelectorAll('[data-reveal]');

        elements.forEach((el) => el.classList.remove('revealed'));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1 });

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [page]);
};

export default useScrollReveal;