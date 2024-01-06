import React from 'react'
import emailjs from 'emailjs-com';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailInput = e.target.email.value;

        if (!emailRegex.test(emailInput)) {
            toast.error('Invalid email format');
            return;
        }

        emailjs
            .sendForm(
                'service_pl9ck35',
                'template_vjf9dmg',
                e.target,
                'ABTNRRz05DviMoiWq'
            )
            .then(
                (result) => {
                    if (result.status === 200) {
                        toast.success('Email sent successfully');
                    }
                    console.log('Email sent successfully');
                },
                (error) => {
                    toast.error('Error sending email');
                    console.log('Error sending email:', error);
                }
            );

        e.target.reset();
    };

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <section id="contact" className="contact section section-bg">
                <div className="section__header container">
                    <span className="section__subtitle">Let's Talk</span>
                    <h2 className="section__title">Feel Free to Contact</h2>
                </div>
                <div className="d-grid contact__wrapper container">
                    <form action='' className="contact__form" onSubmit={handleSubmit}>
                        <div className="form__group">
                            <label className="form__label">Name</label>
                            <input
                                type="text"
                                className="form__input"
                                placeholder="Enter your name"
                                required
                                name="name"
                            />
                        </div>
                        <div className="form__group">
                            <label className="form__label">Email</label>
                            <input
                                type="email"
                                className="form__input"
                                placeholder="Enter your email"
                                required
                                name="email"
                            />
                        </div>
                        <div className="form__group">
                            <label className="form__label">Message</label>
                            <textarea
                                className="form__input form__textarea"
                                placeholder="Tell me about your project"
                                name="message"
                            />
                        </div>
                        <button type="submit" className="btn btn--primary">
                            <i className="ri-send-plane-line" />Send Message
                        </button>
                    </form>
                    <div className="d-grid contact__content">
                        <div className="contact__info">
                            <div className="contact__icon">
                                <i className="ri-phone-line" />
                            </div>
                            <div className="contact__info-wrapper">
                                <h3 className="contact__title">Call:</h3>
                                <p className="contact__description">(+91) 9483320071</p>
                            </div>
                        </div>
                        <div className="contact__info">
                            <div className="contact__icon">
                                <i className="ri-mail-line" />
                            </div>
                            <div className="contact__info-wrapper">
                                <h3 className="contact__title">Email:</h3>
                                <p className="contact__description">sushmitaudupi@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact__info">
                            <div className="contact__icon">
                                <i className="ri-map-pin-line" />
                            </div>
                            <div className="contact__info-wrapper">
                                <h3 className="contact__title">Location:</h3>
                                <p className="contact__description">Udupi, India - 576103</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
