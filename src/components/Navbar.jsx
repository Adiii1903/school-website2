import React, { useState, useEffect } from 'react';
import { content } from '../content';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        transition: 'all var(--transition-normal)',
        padding: scrolled ? 'var(--spacing-xs) 0' : 'var(--spacing-sm) 0',
        zIndex: 1000,
    };

    const containerStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const logoStyles = {
        fontSize: '1.5rem',
        fontWeight: 'var(--font-weight-black)',
        color: 'var(--color-primary)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    };

    const menuStyles = {
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
    };

    const itemStyles = {
        fontWeight: 'var(--font-weight-medium)',
        color: scrolled ? 'var(--color-text)' : 'var(--color-text)',
        cursor: 'pointer',
    };

    const mobileMenuBtnStyles = {
        display: 'none',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        width: '45px',
        height: '32px',
        padding: '0',
    };

    return (
        <>
            <style>{`
        @media (max-width: 768px) {
          .nav-links {
            flex-direction: column;
            justify-content: center;
            align-items: center !important;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100vh;
            background-color: var(--color-primary-light);
            z-index: 1000;
            gap: 2.5rem !important;
          }
          .nav-links.open {
            display: flex !important;
          }
          .nav-links.closed {
            display: none !important;
          }
          .nav-links a {
             font-size: 1.5rem !important;
             font-weight: bold;
          }
          .mobile-menu-btn {
            z-index: 999;
            position: relative;
          }
          .mobile-menu-btn.open {
            display: none !important;
          }
          .mobile-menu-btn.closed {
            display: flex !important;
            flex-direction: column;
            justify-content: space-between;
          }
          .mobile-menu-btn .bar {
            display: block;
            width: 100%;
            height: 4px;
            background-color: var(--color-primary);
            border-radius: 4px;
          }
          .close-menu-btn {
             display: block;
             position: absolute;
             top: 1.5rem;
             right: 2rem;
             font-size: 2.5rem;
             background: transparent;
             border: none;
             color: var(--color-text);
             cursor: pointer;
          }
        }
        @media (min-width: 769px) {
           .nav-links.closed, .nav-links.open {
             display: flex !important;
           }
           .close-menu-btn {
              display: none !important;
           }
        }
      `}</style>
            <nav style={navStyles}>
                <div className="container" style={containerStyles}>
                    <a href="#" style={logoStyles}>
                        <span role="img" aria-label="kite" className="animate-float">🪁</span>
                        Kidsome
                    </a>

                    <button
                        className={`mobile-menu-btn \${menuOpen ? 'open' : 'closed'}`}
                        style={mobileMenuBtnStyles}
                        onClick={() => setMenuOpen(true)}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>

                    <div className={`nav-links \${menuOpen ? 'open' : 'closed'}`} style={menuStyles}>
                        <button className="close-menu-btn" onClick={() => setMenuOpen(false)}>✕</button>
                        <a href="#about" style={itemStyles} onClick={() => setMenuOpen(false)}>About Us</a>
                        <a href="#programs" style={itemStyles} onClick={() => setMenuOpen(false)}>Programs</a>
                        <a href="#facilities" style={itemStyles} onClick={() => setMenuOpen(false)}>Facilities</a>
                        <a href="#gallery" style={itemStyles} onClick={() => setMenuOpen(false)}>Gallery</a>
                        <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Contact Us</a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
