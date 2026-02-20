import React from 'react';
import { content } from '../content';

export const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'white', borderTop: '1px solid #eee', paddingTop: '4rem', paddingBottom: '2rem' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'space-between', marginBottom: '3rem' }}>

                    <div style={{ flex: '1 1 300px' }}>
                        <h2 style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <span role="img" aria-label="kite">🪁</span> Kidsome
                        </h2>
                        <p style={{ maxWidth: '300px' }}>{content.school.tagline}</p>
                    </div>

                    <div style={{ flex: '1 1 200px' }}>
                        <h4 style={{ marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="#about" style={{ color: 'var(--color-text-light)' }}>About Us</a></li>
                            <li><a href="#programs" style={{ color: 'var(--color-text-light)' }}>Our Programs</a></li>
                            <li><a href="#facilities" style={{ color: 'var(--color-text-light)' }}>Facilities</a></li>
                            <li><a href="#gallery" style={{ color: 'var(--color-text-light)' }}>Gallery</a></li>
                        </ul>
                    </div>

                    <div style={{ flex: '1 1 200px' }}>
                        <h4 style={{ marginBottom: '1.5rem' }}>Programs</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><span style={{ color: 'var(--color-text-light)' }}>Nursery (2.5 - 3.5 yrs)</span></li>
                            <li><span style={{ color: 'var(--color-text-light)' }}>Junior KG (3.5 - 4.5 yrs)</span></li>
                            <li><span style={{ color: 'var(--color-text-light)' }}>Senior KG (4.5 - 5.5 yrs)</span></li>
                        </ul>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid #eee', paddingTop: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>
                        &copy; {new Date().getFullYear()} {content.school.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export const FloatingWhatsApp = () => {
    const whatsappNumber = content.school.phone.replace(/\\D/g, ''); // Extract only numbers
    const message = "Hello, I would like to know more about Kidsome Pre-Primary School.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                width: '60px',
                height: '60px',
                backgroundColor: '#25D366',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 9999,
                transition: 'transform var(--transition-fast)',
                textDecoration: 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            aria-label="Chat on WhatsApp"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
        </a>
    );
};
