import React from 'react';
import { content } from '../content';

const Facilities = () => {
    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginTop: '3rem',
    };

    const getPastelBg = (index) => {
        const bgs = ['var(--color-pastel-1)', 'var(--color-pastel-2)', 'var(--color-pastel-3)', 'var(--color-pastel-4)'];
        return bgs[index % bgs.length];
    };

    return (
        <section id="facilities" className="section bg-light">
            <div className="container">
                <h2 className="section-title text-center">Top Notched <span>Facilities</span></h2>
                <p className="section-subtitle">
                    We provide a safe, engaging, and creative environment where your child can thrive.
                </p>

                <style>{`
          .facility-card {
            background: var(--color-white);
            border-radius: var(--radius-lg);
            padding: 2rem;
            text-align: center;
            transition: var(--transition-normal);
            box-shadow: var(--shadow-sm);
            border: 2px solid transparent;
            position: relative;
            overflow: hidden;
            z-index: 1;
          }
          .facility-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-md);
            border-color: var(--color-primary-light);
          }
          .facility-icon-wrap {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem auto;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
            font-size: 2.5rem;
            transition: var(--transition-slow);
          }
          .facility-card:hover .facility-icon-wrap {
            border-radius: 50%;
            transform: rotate(360deg);
          }
          .facility-blob {
            position: absolute;
            top: -20px;
            right: -20px;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            opacity: 0.1;
            z-index: -1;
            transition: var(--transition-slow);
          }
          .facility-card:hover .facility-blob {
            transform: scale(2);
          }
        `}</style>

                <div style={gridStyles}>
                    {content.facilities.map((facility, index) => (
                        <div key={index} className="facility-card">
                            <div className="facility-blob" style={{ backgroundColor: getPastelBg(index) }}></div>
                            <div
                                className="facility-icon-wrap"
                                style={{ backgroundColor: getPastelBg(index) }}
                            >
                                {facility.icon}
                            </div>
                            <h3>{facility.title}</h3>
                            <p>{facility.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;
