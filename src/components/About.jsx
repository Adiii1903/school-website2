import React from 'react';
import { content } from '../content';

const About = () => {
    const containerStyles = {
        display: 'flex',
        alignItems: 'center',
        gap: '3rem',
    };

    const textStyles = {
        flex: 1,
    };

    const imageStyles = {
        flex: 1,
        position: 'relative',
    };

    const imgElementStyles = {
        width: '100%',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
        zIndex: 2,
        border: '8px solid var(--color-white)',
    };

    const approachListStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginTop: '2rem',
    };

    const approachItemStyles = {
        backgroundColor: 'var(--color-white)',
        padding: '1rem',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--color-text)',
        transition: 'var(--transition-fast)',
    };

    return (
        <section id="about" className="section bg-white">
            <div className="container">

                <style>{`
          .approach-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-md);
            color: var(--color-primary);
          }
          @media (max-width: 900px) {
            .about-container {
              flex-direction: column !important;
              text-align: center;
            }
          }
        `}</style>

                <div className="about-container" style={containerStyles}>
                    <div className="about-image" style={imageStyles}>
                        <div style={{ position: 'absolute', top: '-15px', right: '-15px', width: '100px', height: '100px', backgroundColor: 'var(--color-accent)', borderRadius: '50%', zIndex: 1, animation: 'pulse-soft 4s infinite' }}></div>
                        <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '150px', height: '150px', backgroundColor: 'var(--color-primary-light)', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', zIndex: 1, animation: 'float 5s infinite' }}></div>
                        <img
                            src="https://images.unsplash.com/photo-1605627079912-97c3810a11a4?q=80&w=1000&auto=format&fit=crop"
                            alt="Kids learning"
                            style={imgElementStyles}
                        />
                    </div>

                    <div className="about-text" style={textStyles}>
                        <h2 className="section-title">
                            {content.about.title}
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-secondary)', marginBottom: '1.5rem', borderRadius: '2px', display: 'inline-block' }}></div>

                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text)', fontWeight: 'var(--font-weight-medium)' }}>
                            {content.about.philosophy}
                        </p>
                        <p>
                            {content.about.mission}
                        </p>

                        <div style={approachListStyles}>
                            {content.about.teachingApproach.map((item, index) => (
                                <div key={index} className="approach-card" style={approachItemStyles}>
                                    <span style={{ color: 'var(--color-secondary)', fontSize: '1.2rem' }}>✓</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
