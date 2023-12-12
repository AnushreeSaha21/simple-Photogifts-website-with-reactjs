import React from 'react'
import facebook from '../Components/socialmediaImages/facebook.png';
import instagram from '../Components/socialmediaImages/instagram.png';
import linkedin from '../Components/socialmediaImages/linkedin.png';
import pinterest from '../Components/socialmediaImages/pinterest.png';
import twitter from '../Components/socialmediaImages/twitter.png';

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container-footer">
                    <div className="row">
                        <div className="col"><strong>Find Stores</strong>
                            <div className="list-group"><a className="footer-icon-text" href="/stores/bangalore">Bangalore</a><a
                                className="footer-icon-text" href="/stores/gurugram">Gurgoan</a><a className="footer-icon-text"
                                    href="/stores/new-delhi">New Delhi</a><a className="footer-icon-text" href="/stores/chennai">Chennai</a><a
                                        className="footer-icon-text" href="/stores/hyderabad">Hyderabad</a><a className="footer-icon-text"
                                            href="/stores/pune">Pune</a></div>
                        </div>
                        <div className="col"><strong>Our Company</strong>
                            <div className="list-group"><a className="footer-icon-text" href="/about">About us</a><a className="footer-icon-text"
                                href="/careers">Careers</a><a className="footer-icon-text" href="/blog">Blog</a>
                            </div>
                        </div>
                        <div className="col"><strong>Support</strong>
                            <div className="list-group"><a className="footer-icon-text" href="/help">Help</a><a className="footer-icon-text"
                                href="https://lp.printo.in/business-solutions/">Business
                                Solutions</a><a className="footer-icon-text" href="/stores">Find Stores</a><a className="footer-icon-text"
                                    href="/account">My Account</a><a className="footer-icon-text"
                                        href="/labs/login?next=%2Faccount%2Forders">Track
                                    Order</a></div>
                        </div>
                        <div className="col"><strong>Important Links</strong>
                            <div className="list-group "><a className="footer-icon-text" href="/privacy">Privacy Policy</a><a
                                className="footer-icon-text" href="/delivery-details">Delivery & Return
                                Policy</a><a className="footer-icon-text" href="/terms-of-use">Terms & conditions</a></div>
                        </div>
                        <div className="col">
                            <div className="inside-col">
                                <div className="footer-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-telephone-fill"
                                        viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg>
                                </div><span className="footer-icon-text"><a className="footer-icon-text" href="tel:+91 9513734374">+91
                                    XXXXXXXXXX</a></span>
                            </div>
                            <div className="inside-col">
                                <div className="footer-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-envelope-fill"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                    </svg>
                                </div><span className="footer-icon-text"><a className="footer-icon-text" href="/">care@xyz.in</a></span>
                            </div>
                            <div className="follow-us"><span>Follow us</span>
                                <div className="icons">

                                    <a href="/">
                                    <img className="social-media-icons" src={instagram} alt="" /></a>
                                    <img className="social-media-icons" src={facebook} alt="" />
                                    <img className="social-media-icons" src={linkedin} alt="" />
                                    <img className="social-media-icons" src={pinterest} alt="" />
                                    <img className="social-media-icons" src={twitter} alt="" />
                                    <img className="social-media-icons" src="https://printo.in/images/social-icons/play-store.png" alt="" />
                                    <img className="social-media-icons" src="https://printo.in/images/social-icons/app-store.png" alt="" />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="footer-group">
                    <div className="footer-payment-partner">
                        <a className="footer-group-items" href="/"><img src="https://printo.in/images/payment/visa.png" alt=""/></a>
                        <a className="footer-group-items" href="/"><img src="https://printo.in/images/payment/mastercard.png" alt=""/></a>
                        <a className="footer-group-items" href="/"><img src="https://printo.in/images/payment/upi.png" alt=""/></a>
                    </div>

                    <div className="footer-secondary row">

                        <p> © 2023 XYZ Document Services Pvt. Ltd..
                            All Rights Reserved.</p>
                    </div>

                </div>
            </div>
        
        </>
    )
}

export default Footer
