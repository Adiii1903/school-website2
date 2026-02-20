import React from 'react';
import { content } from '../content';

const Contact = () => {
    const containerStyles = {
        display: 'flex',
        gap: '4rem',
        flexWrap: 'wrap',
    };

    const infoStyles = {
        flex: '1 1 300px',
    };

    const formStyles = {
        flex: '1 1 400px',
        backgroundColor: 'var(--color-white)',
        padding: '2.5rem',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
    };

    const contactItemStyles = {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        marginBottom: '1.5rem',
    };

    const iconStyles = {
        width: '50px',
        height: '50px',
        backgroundColor: 'var(--color-pastel-1)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        flexShrink: 0,
    };

    return (
        <section id="contact" className="section" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '30%', height: '100%', backgroundColor: 'var(--color-pastel-3)', opacity: 0.2, zIndex: -1, borderTopLeftRadius: '50% 100%', borderBottomLeftRadius: '50% 100%' }}></div>
            <div className="container">
                <h2 className="section-title text-center">Get in <span>Touch</span></h2>
                <p className="section-subtitle">We'd love to hear from you! Book a visit or ask us anything.</p>

                <style>{`
          .form-group {
            margin-bottom: 1.5rem;
          }
          .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: var(--font-weight-bold);
          }
          .form-control {
            width: 100%;
            padding: 0.8rem 1rem;
            border: 2px solid #eee;
            border-radius: var(--radius-sm);
            font-family: inherit;
            font-size: 1rem;
            transition: var(--transition-fast);
          }
          .form-control:focus {
            outline: none;
            border-color: var(--color-primary);
            background-color: var(--color-bg);
          }
          .map-container {
            width: 100%;
            height: 250px;
            border-radius: var(--radius-md);
            overflow: hidden;
            margin-top: 2rem;
            box-shadow: var(--shadow-sm);
          }
          .map-container iframe {
            width: 100%;
            height: 100%;
            border: 0;
          }
        `}</style>

                <div style={containerStyles}>
                    <div className="contact-info" style={infoStyles}>
                        <h3>Contact Information</h3>
                        <p style={{ marginBottom: '2rem' }}>Ready to give your child the best learning experience? Reach out to us today.</p>

                        <div style={contactItemStyles}>
                            <div style={iconStyles}>📍</div>
                            <div>
                                <h4 style={{ marginBottom: '0.2rem' }}>Address</h4>
                                <p style={{ margin: 0 }}>{content.school.address}</p>
                            </div>
                        </div>

                        <div style={contactItemStyles}>
                            <div style={{ ...iconStyles, backgroundColor: 'var(--color-pastel-2)' }}>📞</div>
                            <div>
                                <h4 style={{ marginBottom: '0.2rem' }}>Phone</h4>
                                <p style={{ margin: 0 }}>{content.school.phone}</p>
                            </div>
                        </div>

                        <div style={contactItemStyles}>
                            <div style={{ ...iconStyles, backgroundColor: 'var(--color-pastel-4)' }}>⏰</div>
                            <div>
                                <h4 style={{ marginBottom: '0.2rem' }}>School Timings</h4>
                                <p style={{ margin: 0 }}>{content.school.timings}</p>
                            </div>
                        </div>

                        <div className="map-container">
                            <iframe
                                src={content.school.mapUrl}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="School Location Map"
                            ></iframe>
                        </div>
                    </div>

                    <div className="contact-form" style={formStyles}>
                        <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Send an Enquiry</h3>
                        <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your enquiry! We will get back to you soon.'); }}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Parent's Name</label>
                                <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" className="form-control" placeholder="Enter your phone number" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="childAge">Child's Age</label>
                                <select id="childAge" className="form-control" required style={{ backgroundColor: 'white' }}>
                                    <option value="">Select child's age</option>
                                    <option value="2-3">2-3 Years (Nursery)</option>
                                    <option value="3-4">3-4 Years (Jr KG)</option>
                                    <option value="4-5">4-5 Years (Sr KG)</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Message</label>
                                <textarea id="message" className="form-control" rows="4" placeholder="How can we help you?" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Enquiry</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
