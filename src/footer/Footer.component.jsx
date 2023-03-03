import React, { Fragment } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
                        <Link to="/" className="me-4 text-reset">
                            <FaFacebookSquare />
                        </Link>
                        <Link to="/" className="me-4 text-reset">
                            <FaTwitterSquare/>
                        </Link>
                        <Link to="/" className="me-4 text-reset">
                            <FaGoogle/>
                        </Link>
                        <Link to="/" className="me-4 text-reset">
                            <FaInstagramSquare/>
                        </Link>
                        <Link to="/" className="me-4 text-reset">
                            <FaLinkedin/>
                        </Link>
                        <Link to="/" className="me-4 text-reset">
                            <FaGithubSquare/>
                        </Link>
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
                                    Easy and quick news onClicks. Reach out moreNews.in to stay up to date with the world.
                                </p>
                            </div>



                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i>Products</i>
                                </h6>
                                <p>
                                    <Link to="/" className="text-reset">Angular</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-reset">React</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-reset">Vue</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-reset">Laravel</Link>
                                </p>
                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i>Useful links</i>
                                </h6>
                                <p>
                                    <Link to="/" className="text-reset">Pricing</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-reset">Settings</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-reset">Orders</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-reset">Help</Link>
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
                    <Link className="text-reset fw-bold" to="/">moreNews.in</Link>
                </div>

            </footer>

        </Fragment>
    )
}

export default Footer;
