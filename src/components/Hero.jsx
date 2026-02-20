import React from 'react';
import { content } from '../content';

const Hero = () => {
    const heroStyles = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px', // Offset for navbar
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--color-bg)',
    };

    const containerStyles = {
        display: 'flex',
        alignItems: 'center',
        gap: '4rem',
        position: 'relative',
        zIndex: 2,
    };

    const contentStyles = {
        flex: 1,
        maxWidth: '600px',
    };

    const headingStyles = {
        fontSize: '3.5rem',
        lineHeight: 1.1,
        marginBottom: '1.5rem',
        color: 'var(--color-text)',
    };

    const subStyles = {
        fontSize: '1.25rem',
        marginBottom: '2rem',
        color: 'var(--color-text-light)',
    };

    const btnGroupStyles = {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
    };

    const imageWrapperStyles = {
        flex: 1,
        position: 'relative',
    };

    const imgStyles = {
        width: '100%',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
        zIndex: 2,
    };

    // Decorative blobs
    const blob1Styles = {
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '400px',
        height: '400px',
        backgroundColor: 'var(--color-pastel-1)',
        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        filter: 'blur(40px)',
        opacity: 0.6,
        zIndex: 1,
        animation: 'pulse-soft 6s infinite alternate',
    };

    const blob2Styles = {
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '300px',
        height: '300px',
        backgroundColor: 'var(--color-pastel-2)',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        filter: 'blur(30px)',
        opacity: 0.6,
        zIndex: 1,
        animation: 'pulse-soft 5s infinite alternate-reverse',
    };

    return (
        <section id="home" style={heroStyles}>
            <div style={blob1Styles}></div>
            <div style={blob2Styles}></div>

            <div className="container" style={containerStyles}>
                <style>{`
          @media (max-width: 992px) {
            .hero-container {
              flex-direction: column !important;
              text-align: center;
              padding-top: 4rem;
            }
            .hero-content {
              margin: 0 auto;
            }
            .hero-heading {
              font-size: 2.5rem !important;
            }
            .hero-btns {
              justify-content: center;
            }
          }
        `}</style>

                <div className="hero-content fade-in" style={contentStyles}>
                    <div style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: 'var(--color-pastel-1)', borderRadius: 'var(--radius-pill)', color: '#d35400', fontWeight: 'var(--font-weight-bold)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                        🌟 {content.school.tagline}
                    </div>
                    <h1 className="hero-heading" style={headingStyles}>
                        Building <span className="text-primary">Bright</span> Futures Together
                    </h1>
                    <p style={subStyles}>
                        {content.hero.subheading}
                    </p>
                    <div className="hero-btns" style={btnGroupStyles}>
                        <a href="#contact" className="btn btn-primary">{content.hero.cta1}</a>
                        <a href="#about" className="btn btn-outline">{content.hero.cta2}</a>
                    </div>
                </div>

                <div className="hero-image fade-in" style={{ ...imageWrapperStyles, animationDelay: '0.2s' }}>
                    <div style={{ position: 'absolute', top: '-20px', left: '-20px', fontSize: '4rem', zIndex: 3 }} className="animate-float">🎈</div>
                    <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', fontSize: '4rem', zIndex: 3, animationDelay: '1s' }} className="animate-float">🪁</div>
                    <img src={content.hero.image} alt="Happy kids at preschool" style={imgStyles} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
