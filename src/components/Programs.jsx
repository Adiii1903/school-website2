import React from 'react';
import { content } from '../content';

const Programs = () => {
    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '2rem',
    };

    const getPastelColor = (index) => {
        const colors = ['var(--color-pastel-1)', 'var(--color-pastel-2)', 'var(--color-pastel-3)'];
        return colors[index % colors.length];
    };

    return (
        <section id="programs" className="section">
            <div className="container">
                <h2 className="section-title text-center">Our <span>Programs</span></h2>
                <p className="section-subtitle">
                    Age-appropriate learning modules designed to foster independence, creativity, and foundational skills.
                </p>

                <style>{`
          .program-card {
            background-color: var(--color-white);
            border-radius: var(--radius-lg);
            padding: 2.5rem 2rem;
            text-align: center;
            box-shadow: var(--shadow-sm);
            transition: all var(--transition-normal);
            position: relative;
            overflow: hidden;
            z-index: 1;
            border-bottom: 5px solid transparent;
          }
          .program-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-lg);
          }
          
          .program-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 10px;
            z-index: 2;
          }
          
          .program-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            display: inline-block;
            background: var(--color-bg);
            width: 80px;
            height: 80px;
            line-height: 80px;
            border-radius: 50%;
            transition: var(--transition-fast);
          }
          
          .program-card:hover .program-icon {
            transform: scale(1.1) rotate(10deg);
          }
          
          .program-age {
            display: inline-block;
            padding: 0.3rem 1rem;
            border-radius: var(--radius-pill);
            font-size: 0.85rem;
            font-weight: var(--font-weight-bold);
            margin-bottom: 1rem;
          }
        `}</style>

                <div style={gridStyles}>
                    {content.programs.map((program, index) => (
                        <div
                            key={program.id}
                            className="program-card"
                            style={{ borderBottomColor: getPastelColor(index) }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '10px',
                                    backgroundColor: getPastelColor(index)
                                }}
                            ></div>

                            <div className="program-icon">{program.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{program.name}</h3>
                            <span
                                className="program-age"
                                style={{
                                    backgroundColor: getPastelColor(index),
                                    color: 'var(--color-text)'
                                }}
                            >
                                {program.age}
                            </span>
                            <p>{program.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
