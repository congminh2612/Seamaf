import React from 'react';
import './style.css';
import { Container, Stack, Grid } from '@mui/material';
const Footer = () => {
  return (
    <section className="footer-section">
      <Container>
        <Stack>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <div className="footer-widget about-widget">
                <h2>About</h2>
                <p>
                  Online &amp; physical bead shop with the best beads and
                  beading supplies in Zimbabwe ✓ Over 9000 beads for jewelry
                  making ✓ Glass beads ✓ Beading supplies and much more!
                </p>
                <img
                  width="90%"
                  alt=""
                />
                <div>
                  <form action="" className="subscribe-form mt-2">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="form-control   "
                    />
                    <button>SUBSCRIBE</button>
                  </form>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="footer-widget about-widget">
                <h2>USEFUL LINKS</h2>
                <ul>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/">Track Orders</a>
                  </li>
                  <li>
                    <a href="/">Shipping</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                  <li>
                    <a href="/">My Orders</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/">Support</a>
                  </li>
                  <li>
                    <a href="/">Terms of Use</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">Our Services</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="footer-widget about-widget">
                <h2>Blog</h2>
                <div className="fw-latest-post-widget">
                  <div className="lp-item">
                    <div
                      className="lp-thumb set-bg"
                      style={{
                        backgroundImage:
                          'url(https://images.unsplash.com/photo-1659116763125-de6bc2c8e31f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)',
                      }}
                    ></div>
                    <div className="lp-content">
                      <h5 className="text-light">BOHE MIAN WEDDING THEME</h5>
                      <span>1 year ago</span>
                      <a href="/" className="readmore">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="lp-item">
                    <div
                      className="lp-thumb set-bg"
                      style={{
                        backgroundImage:
                          'url(https://images.unsplash.com/photo-1659116763125-de6bc2c8e31f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)',
                      }}
                    ></div>
                    <div className="lp-content">
                      <h5 className="text-light">Vintage Wedding Theme `</h5>
                      <span>1 year ago</span>
                      <a href="/" className="readmore">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="footer-widget contact-widget">
                <h2>Contact</h2>
                <div className="con-info">
                  <span>C.</span>
                  <p>RVM SeaMaf </p>
                </div>
                <div className="con-info">
                  <span>B.</span>
                  <p>
                    108 Chinhoyi Street, Central Business District, Harare
                    Zimbabwe{' '}
                  </p>
                </div>
                <div className="con-info">
                  <span>T.</span>
                  <p>+263782149840</p>
                </div>
                <div className="con-info">
                  <span>E.</span>
                  <p>rvmseamaf@gmail.com</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Stack>
      </Container>
      <div className="social-links-warp">
        <Container>
          <div className="social-links">
            <a href="/" target="_blank" className="instagram">
              <i className="fab fa-instagram"></i>
              <span>instagram</span>
            </a>
            <a href="/" target="_blank" className="pinterest">
              <i className="fab fa-pinterest"></i>
              <span>pinterest</span>
            </a>
            <a href="/" target="_blank" className="facebook">
              <i className="fab fa-facebook"></i>
              <span>facebook</span>
            </a>
            <a href="/" target="_blank" className="twitter">
              <i className="fab fa-twitter"></i>
              <span>twitter</span>
            </a>
            <a href="/" target="_blank" className="youtube">
              <i className="fab fa-youtube"></i>
              <span>youtube</span>
            </a>
            <a href="/" target="_blank" className="linkedin">
              <i className="fab fa-linkedin"></i>
              <span>linkedin</span>
            </a>
          </div>
          <p className="text-white text-center mt-5">
            Copyright © 2022 All rights reserved | Developed By{' '}
            <a href="/" target="_blank">
              Eloquent Geeks
            </a>
          </p>
        </Container>
      </div>
    </section>
  );
};

export default Footer;
