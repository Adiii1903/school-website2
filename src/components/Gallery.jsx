import React from 'react';
import { content } from '../content';

const Gallery = () => {
    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        marginTop: '2rem',
    };

    return (
        <section id="gallery" className="section bg-white">
            <div className="container">
                <h2 className="section-title text-center">Life at <span>Kidsome</span></h2>
                <p className="section-subtitle">
                    Glimpses of joyful learning, celebration, and everyday magic at our preschool.
                </p>

                <style>{`
          .gallery-item {
            position: relative;
            border-radius: var(--radius-md);
            overflow: hidden;
            aspect-ratio: 1;
            cursor: pointer;
            box-shadow: var(--shadow-sm);
          }
          .gallery-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }
          .gallery-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(255,107,107,0.8), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
            display: flex;
            align-items: flex-end;
            padding: 1.5rem;
          }
          .gallery-item:hover .gallery-img {
            transform: scale(1.1);
          }
          .gallery-item:hover .gallery-overlay {
            opacity: 1;
          }
          .gallery-icon {
            color: white;
            font-size: 2rem;
            transform: translateY(20px);
            opacity: 0;
            transition: all 0.3s ease 0.1s;
          }
          .gallery-item:hover .gallery-icon {
            transform: translateY(0);
            opacity: 1;
          }
        `}</style>

                <div style={gridStyles}>
                    {content.gallery.map((imgSrc, index) => (
                        <div key={index} className="gallery-item">
                            <img src={imgSrc} alt={`Gallery ${index + 1}`} className="gallery-img" loading="lazy" />
                            <div className="gallery-overlay">
                                <div className="gallery-icon">📸</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '3rem' }}>
                    <a href="#contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-secondary)' }}>See More on Instagram</a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
