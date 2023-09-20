import React from 'react';
import {Link} from 'react-router-dom';
const styles = {
  topBarMenuItem: {
    color: 'white',
    fontSize: '15px',
    fontWeight: 500,
    borderBottom: '2px solid transparent',
    transition: '0.3s all',
    textTransform: 'uppercase',
  },
  heloVisible: {
    color: 'orange',
  },
};

const Contact = () => {
  return (
    <>
      <style>
        {`
          #top-bar .main-menu li a {
            color: ${styles.topBarMenuItem.color};
            font-size: ${styles.topBarMenuItem.fontSize};
            font-weight: ${styles.topBarMenuItem.fontWeight};
            border-bottom: ${styles.topBarMenuItem.borderBottom};
            transition: ${styles.topBarMenuItem.transition};
            text-transform: ${styles.topBarMenuItem.textTransform};
          }

          /* Add missing definition for styles.aboutBlockText if needed */

          .helo, .is-visible {
            color: ${styles.heloVisible.color};
          }
        `}
      </style>

      <body style={{ backgroundColor: 'black' }}></body>
        {/* Your content */}
        <header style={{ background: 'linear-gradient(315deg, orange 13%, black 74%)' }} id="top-bar" className="navbar-fixed-top animated-header">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <nav className="collapse navbar-collapse navbar-right" role="navigation">
              <div className="main-menu">
               <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/">Home</Link> {/* Link to Home */}
                  </li>
                  <li>
                    <Link to="/favoritePersonality">FAVORITE PERSONALITIES</Link> {/* Link to favoritePersonality */}
                  </li>
                  <li>
                    <Link to="/favoriteCity">FAVORITE CITIES</Link> {/* Link to favoriteCity */}
                  </li>
                  <li>
                    <Link to="/favoriteSpot">FAVORITE SPOTS</Link> {/* Link to favoriteSpot */}
                  </li>
                  <li>
                    <Link to="/contact">Contact Me</Link> {/* Link to Contact Me */}
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        <section style={{ backgroundColor: 'black' }} className="global-page-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block">
                  <h2>Contact Information</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="block">
                  <h2 className="subtitle wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".3s" style={{ color: 'rgb(230, 224, 224)' }}>Please Enter Your Contact Details Below;</h2>
                  <p className="subtitle-des wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".5s"></p>
                  <div className="contact-form">
                    <form id="contact-form" method="#" action="#" role="form">

                      <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".6s">
                        <input type="text" placeholder="Name" className="form-control" name="name" id="name" />
                      </div>

                      <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".8s">
                        <input type="email" placeholder="Email" className="form-control" name="email" id="email" />
                      </div>

                      <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".9s">
                        <input type="tel" placeholder="Contact Number" className="form-control" name="contact number" id="contact number" />
                      </div>

                      <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1.2s">
                        <textarea rows="6" placeholder="Message" className="form-control" name="message" id="message"></textarea>
                      </div>

                      <div id="success" className="success">
                        Thank you. The Mailman is on His Way :)
                      </div>

                      <div id="error" className="error">
                        Sorry, don't know what happened. Try later :(
                      </div>

                      <div id="submit" className="wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1.4s">
                        <input type="submit" id="contact-submit" className="btn btn-default btn-send" value="Submit" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="footer" style={{ backgroundColor: 'black' }}>
          <div className="container">
            <div className="col-md-8">
              <p className="copyright">Copyright <span>{new Date().getFullYear()}</span></p>
            </div>
            <div className="col-md-4">
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/login/" className="Facebook">
                    <i className="ion-social-facebook helo"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/accounts/login/?next=%2Flogin%2F&source=desktop_nav" className="Instagram">
                    <i className="ion-social-instagram helo"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" className="Twitter">
                    <i className="ion-social-twitter helo"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/login" className="linkedin">
                    <i className="ion-social-linkedin helo"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" className="youtube">
                    <i className="ion-social-youtube helo"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      
    </>
  );
}

export default Contact;
