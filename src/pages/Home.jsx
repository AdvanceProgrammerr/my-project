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
  aboutBlockText: {
    color: '#727272',
    fontSize: '16px',
    lineHeight: '28px',
    marginBottom: '35px',
  },
  heloVisible: {
    color: 'orange',
  },
};


const Home = () => {
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

          #about .block p {
            color: ${styles.aboutBlockText.color};
            font-size: ${styles.aboutBlockText.fontSize};
            line-height: ${styles.aboutBlockText.lineHeight};
            margin-bottom: ${styles.aboutBlockText.marginBottom};
          }

          .helo, .is-visible {
            color: ${styles.heloVisible.color};
          }
        `}
      </style>

      <body style={{ backgroundColor: 'black' }}></body>

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

<section id="hero-area">
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <div className="block wow fadeInUp" data-wow-delay=".3s">
          <h1>Welcome To My Personal Website</h1><br />
          <section className="cd-intro">
            <img src="assets/img/profile.jpg" alt="" style={{ width: '200px', height: '200px', borderRadius: '70%', objectFit: 'cover' }} />
            <h1 className="wow fadeInUp animated cd-headline slide" data-wow-delay=".4s">
              <h1>Hey, My Name Is Aaira Ahmad</h1><br />
            </h1>
          </section>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="about">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div style={{ color: 'white' }} className="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
          <h2>
            ABOUT ME
          </h2>
          <p>
            My name is Aaira Ahmad and i belong to Punjab, Pakistan.
          </p>
          <p>
            I had done my Intermediate in ICS with 1st division from Punjab group of colleges and also I had done my Bachelors degree in Computer Science with 1st division from UMT, Lahore.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <img src="assets/img/about.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>

<div className="finish" style={{ margin: 'auto', marginTop: '-70px', height: '100px', width: '10px', backgroundColor: 'orange' }}></div>

<section id="about" style={{ marginTop: '-100px' }}>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div style={{ color: 'white' }} className="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
          <h2>
            Hobbies
          </h2>
          <p>
          Doing Art, playing cricket and tennis, doing self-learning and trying to get learn new things in my or related to my field.
          </p>

        </div>
      </div>

      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <img src="assets/img/hobbies.png" width="500px" height="350px" style={{ objectFit: 'cover' }} alt="" />
        </div>
      </div>
    </div>
  </div>
</section>

<div className="finish" style={{ margin: 'auto', marginTop: '-70px', height: '100px', width: '10px', backgroundColor: 'orange' }}></div>

<section id="about" style={{ marginTop: '-100px' }}>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div style={{ color: 'white' }} className="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
          <h2>
            Skills
          </h2>
          <p>
          I’m good in Computer related courses, I’m good in research work, I’m good in communication, I have convincing power, I’m good in to handle with cybersecurity attacks in devices, I’m also good in Problem-solving.
          </p>
          
        </div>
      </div>

      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <img src="assets/img/skills.png" width="500px" height="350px" style={{ objectFit: 'cover' }} alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
<div className="finish" style={{ margin: 'auto', marginTop: '-70px', height: '100px', width: '10px', backgroundColor: 'orange' }}></div>
<section id="about" style={{ marginTop: '-100px' }}>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div style={{ color: 'white' }} className="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
          <h2>
            Expertise
          </h2>
          <p>
            In Webdevelopment, In Informationsecurity, In C++/python language ,In Projectmanagement , In Digitalmarketing.
          </p>
         
        </div>
      </div>

      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <img src="assets/img/expertise.png" width="500px" height="350px" style={{ objectFit: 'cover' }} alt="" />
        </div>
      </div>
    </div>
  </div>
</section>

<div className="finish" style={{ margin: 'auto', marginTop: '-70px', height: '100px', width: '10px', backgroundColor: 'orange' }}></div>

<section id="about" style={{ marginTop: '-100px' }}>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div style={{ color: 'white' }} className="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
          <h2>
            Experience
          </h2>
          <p>
            Freshly Graduate.
          </p>
          <p>
           Not Any.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <img src="assets/img/Experience.png" width="500px" height="350px" style={{ objectFit: 'cover' }} alt="" />
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

export default Home;

    



      
