import React, { Fragment } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (
        <Fragment>

            <footer className="text-center text-lg-start bg-light text-muted footer-div">

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom " >

                    <div className="me-5 d-none d-lg-block">
                        <span><i>Get connected with us on social networks:</i></span>
                    </div>



                    <div>
                        <a href="/" className="me-4 text-reset">
                            <FaFacebookSquare />
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <FaTwitterSquare/>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <FaGoogle/>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <FaInstagramSquare/>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <FaLinkedin/>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <FaGithubSquare/>
                        </a>
                    </div>

                </section>

                <section>
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className=" fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i><i><b>moreNews</b></i>
                                </h6>
                                <p>
                                    Easy and quick news onClicks.Reach out moreNews.in to stay up to date with the world
                                </p>
                            </div>



                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i>Products</i>
                                </h6>
                                <p>
                                    <a href="/" className="text-reset">Angular</a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset">React</a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset">Vue</a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset">Laravel</a>
                                </p>
                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i>Useful links</i>
                                </h6>
                                <p>
                                    <a href="/" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset">Help</a>
                                </p>
                            </div>



                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4"><i>Contact</i></h6>
                                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>

                        </div>

                    </div>
                </section>



                <div className="text-center p-4" style={{ backgroundColor: "#E5D1FA" }}>
                    © {currentYear} Copyright:
                    <a className="text-reset fw-bold" href="/">moreNews.in</a>
                </div>

            </footer>

        </Fragment>
    )
}

export default Footer;
