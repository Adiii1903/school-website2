import React, { useState, useEffect } from 'react';
import { content } from '../content';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % content.testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="section bg-light" style={{ overflow: 'hidden' }}>
            <div className="container">
                <h2 className="section-title text-center">Parent <span>Love</span></h2>
                <p className="section-subtitle">Read what our wonderful parents have to say about us.</p>

                <style>{`
          .testimonial-slider {
            max-width: 800px;
            margin: 0 auto;
            position: relative;
            padding: 2rem;
            background: var(--color-white);
            border-radius: var(--radius-xl);
            box-shadow: var(--shadow-md);
            text-align: center;
          }
          .quote-mark {
            font-size: 4rem;
            color: var(--color-pastel-1);
            position: absolute;
            top: 10px;
            left: 20px;
            font-family: serif;
            line-height: 1;
          }
          .testimonial-text {
            font-size: 1.25rem;
            font-style: italic;
            margin-bottom: 2rem;
            color: var(--color-text);
            position: relative;
            z-index: 2;
          }
          .testimonial-author {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
          }
          .author-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: var(--color-pastel-3);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            color: white;
          }
          .author-details h4 {
            margin: 0;
            color: var(--color-primary);
          }
          .author-details span {
            font-size: 0.9rem;
            color: var(--color-text-light);
          }
          .slider-dots {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 2rem;
          }
          .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #ddd;
            cursor: pointer;
            transition: var(--transition-fast);
          }
          .dot.active {
            background-color: var(--color-primary);
            transform: scale(1.2);
          }
        `}</style>

                <div className="testimonial-slider fade-in">
                    <div className="quote-mark">"</div>
                    <p className="testimonial-text">
                        {content.testimonials[currentIndex].feedback}
                    </p>
                    <div className="testimonial-author">
                        <div className="author-avatar" style={{ backgroundColor: currentIndex % 2 === 0 ? 'var(--color-pastel-2)' : 'var(--color-pastel-4)' }}>
                            {content.testimonials[currentIndex].parent.charAt(0)}
                        </div>
                        <div className="author-details" style={{ textAlign: 'left' }}>
                            <h4>{content.testimonials[currentIndex].parent}</h4>
                            <span>Parent of {content.testimonials[currentIndex].child}</span>
                        </div>
                    </div>
                </div>

                <div className="slider-dots">
                    {content.testimonials.map((_, idx) => (
                        <div
                            key={idx}
                            className={`dot \${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
