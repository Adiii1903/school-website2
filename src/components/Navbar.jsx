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
        fontSize: '1.5rem',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        color: 'var(--color-text)',
    };

    return (
        <>
            <style>{`
        @media (max-width: 768px) {
          .nav-links {
            display: \${menuOpen ? 'flex' : 'none'} !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            padding: 2rem;
            box-shadow: var(--shadow-md);
            gap: 1.5rem !important;
          }
          .mobile-menu-btn {
            display: block !important;
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
                        className="mobile-menu-btn"
                        style={mobileMenuBtnStyles}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? '✕' : '☰'}
                    </button>

                    <div className="nav-links" style={menuStyles}>
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
