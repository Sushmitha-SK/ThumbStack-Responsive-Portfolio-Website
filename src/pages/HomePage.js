import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import Portfolio_Section from '../components/Portfolio_Section'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomePage = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <Header />
            <main className='main'>
                <Home />
                <Portfolio_Section />
                <Skills />
                <Contact />
            </main>
            <Footer />
            <a
                href="#scrolltop"
                id="scrolltop"
                className={`scrolltop ${showScrollTop ? 'scrolltop--show' : ''}`}
                onClick={handleScrollToTop}
            >
                <i className="ri-arrow-up-line"></i>
            </a>
        </>
    )
}

export default HomePage