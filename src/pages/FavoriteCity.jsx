import React from 'react';
import { Link } from 'react-router-dom';

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

const FavoriteCity = () => {
  const playVideo = (sectionNumber) => {
    const thumbnail = document.querySelector(`.thumbnail[data-video-src="${videos[sectionNumber]}"]`);
    const videoSrc = thumbnail?.getAttribute("data-video-src");
    const videoOverlay = document.querySelector(`.video-overlay.video-overlay-${sectionNumber}`);
    const videoIframe = videoOverlay?.querySelector("iframe");
  
    if (videoIframe && videoSrc) {
      videoIframe.src = videoSrc;
      videoOverlay.style.display = "flex";
    }
  };
  
  const closeVideo = (sectionNumber) => {
    const videoOverlay = document.querySelector(`.video-overlay.video-overlay-${sectionNumber}`);
    const videoIframe = videoOverlay?.querySelector("iframe");
  
    if (videoIframe) {
      videoIframe.src = "";
      videoOverlay.style.display = "none";
    }
  };
  

  const videos = [
    "https://www.youtube.com/embed/rJXhbhtmHjE?si=WF-4yVbZmjNuhmlp",
    "https://www.youtube.com/embed/RGA9dK5Gp9M?si=aeto8SyojtI3MA9T" ,
    "https://www.youtube.com/embed/cpgcd0fHrDY?si=rWtTEDkKiyWBzI4f",
    "https://www.youtube.com/embed/fdnMNaVWJOg?si=SvOf1SnBemjwDVsW",
    "https://www.youtube.com/embed/tXwloL2Skco?si=tqSq6w6FNH4hUdnd",
    "https://www.youtube.com/embed/15W4PLDYDfw?si=AhYzVyYJMjqRNLlM",
  ];

  const cityData = [
    {
      cityName: "LAHORE",
      imageSrc: "assets/img/Lahore.jpg",
      sectionNumber: 0,
    },
    {
      cityName: "FAISALABAD",
      imageSrc: "assets/img/FAISALABAD.jpg",
      sectionNumber: 1,
    },
    {
      cityName: "ISLAMABAD",
      imageSrc: "assets/img/Islamabad.jpg",
      sectionNumber: 2,
    },
    {
      cityName: "RAWALPINDI",
      imageSrc: "assets/img/RAWAL.jpg",
      sectionNumber: 3,
    },
    {
      cityName: "MULTAN",
      imageSrc: "assets/img/MULTAN.jpg",
      sectionNumber: 4,
    },
    {
      cityName: "KARACHI",
      imageSrc: "assets/img/KARACHI.jpg",
      sectionNumber: 5,
    },
  ];

  return (
    <div>
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

      <header
        style={{ background: 'linear-gradient(315deg, orange 13%, black 74%)' }}
        id="top-bar"
        className="navbar-fixed-top animated-header"
      >
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
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

     
      <section
        style={{ backgroundColor: 'black' }}
        className="global-page-header"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h2>MY Favorite Cities</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

<section key={0} id="about" style={{ marginTop: "-100px" }}>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div style={{ color: 'white' }} className="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
          <h2>LAHORE</h2>
          <p>
          Lahore is the second largest city in Pakistan after Karachi and 26th largest in the world, with a population of over 13 million. It is situated in the north-east of the country with River Ravi flowing north-west of the city. It is the capital of the province of Punjab, where it is the largest city.
          </p>
          <p>
          Lahore is a major centre of Qawwali music. The city also hosts much of Pakistan's tourist industry, with major attractions including the Walled City, the famous Badshahi and Wazir Khan mosques, as well as several Sikh and Sufi shrines.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <div className="image-container">
            <img src="assets/img/lahore.webp" style={{ objectFit: 'cover' }} width="500px" height="350px" alt="Image of LAHORE" className={`thumbnail`} data-video-src={videos[0]} />
            <div className={`play-button play-button-0`} onClick={() => playVideo(0)}>&#9658;</div>
            <div className={`video-overlay video-overlay-0`}>
              <iframe width="500" height="350" src={videos[0]} title="Video of LAHORE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="finish" style={{ margin: 'auto', marginTop: '-70px', height: '100px', width: '10px', backgroundColor: 'orange' }}></div>
<section key={1} id="about" style={{ marginTop: "-200px" }}>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div style={{ color: 'white' }} className="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
          <h2>FAISALABAD</h2>
          <p>
          Faisalabad, formerly known as Lyallpur, is the second largest city and industrial centre of the Pakistani province of Punjab. It is the third largest city in Pakistan, with a population of over 3.7 million. It is situated in the north-east of the country, lying between the plains of the Ravi and Chenab River.
          </p>
          <p>
          Faisalabad is well recognized for its clothes and related items throughout the world. It is the best market to buy home furnishings (bed sheets, curtains, towels etc.), personal clothing, and hosiery wear. The Punjabi dresses are considered as the traditional clothes of Faisalabad.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <div className="image-container">
            <img src="assets/img/faisal.jpg" style={{ objectFit: 'cover' }} width="500px" height="350px" alt="Image of FAISALABAD" className={`thumbnail`} data-video-src={videos[1]} />
            <div className={`play-button play-button-1`} onClick={() => playVideo(1)}>&#9658;</div>
            <div className={`video-overlay video-overlay-1`}>
              <iframe width="500" height="350" src={videos[1]} title="Video of FAISALABAD" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="finish" style={{ margin: 'auto', marginTop: '-70px', height: '100px', width: '10px', backgroundColor: 'orange' }}></div>
<section key={2} id="about" style={{ marginTop: "-200px" }}>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div style={{ color: 'white' }} className="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
          <h2>ISLAMABAD</h2>
          <p>
          Islamabad is the capital city of Pakistan. It is the country's ninth-most populous city, with a population of over 1.2 million people, and is federally administered by the Pakistani government as part of the Islamabad Capital Territory.
          </p>
          <p>
          Islamabad has a reputation of being a thriving, business-minded capital that lies in the centre of Pakistan's growing urbanized scene. The white marble Faisal Mosque, which is an important landmark of the city one of the largest mosques in the world, is a central point of tourists as is the bustling Jinnah Market.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <div className="image-container">
            <img src="assets/img/isl.jpg" style={{ objectFit: 'cover' }} width="500px" height="350px" alt="Image of ISLAMABAD" className={`thumbnail`} data-video-src={videos[2]} />
            <div className={`play-button play-button-2`} onClick={() => playVideo(2)}>&#9658;</div>
            <div className={`video-overlay video-overlay-2`}>
              <iframe width="500" height="350" src={videos[2]} title="Video of ISLAMABAD" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="finish" style={{ margin: 'auto', marginTop: '-70px', height: '100px', width: '10px', backgroundColor: 'orange' }}></div>
<section key={3} id="about" style={{ marginTop: "-200px" }}>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div style={{ color: 'white' }} className="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
          <h2>RAWALPINDI</h2>
          <p>
          Rawalpindi is a city in the Punjab province of Pakistan. It is the fourth most populous city in Pakistan after Karachi, Lahore, and Faisalabad, and third most populous in Punjab after Lahore and Faisalabad. 
          </p>
          <p>
          Rawalpindi is an important administrative, commercial, and industrial centre. Its industries include locomotive works, gasworks, an oil refinery, sawmills, an iron foundry, a brewery, and cotton, hosiery, and textile mills; it also produces shoes, leather goods, pottery, newsprint, and tents.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <div className="image-container">
            <img src="assets/img/rawal.jpg" style={{ objectFit: 'cover' }} width="500px" height="350px" alt="Image of ISLAMABAD" className={`thumbnail`} data-video-src={videos[3]} />
            <div className={`play-button play-button-2`} onClick={() => playVideo(3)}>&#9658;</div>
            <div className={`video-overlay video-overlay-2`}>
              <iframe width="500" height="350" src={videos[3]} title="Video of RAWALPINDI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="finish" style={{ margin: 'auto', marginTop: '-70px', height: '100px', width: '10px', backgroundColor: 'orange' }}></div>
<section key={4} id="about" style={{ marginTop: "-200px" }}>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div style={{ color: 'white' }} className="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
          <h2>MULTAN</h2>
          <p>
          Multan is a city in Punjab, Pakistan, located on the bank of Chenab River. Multan was Pakistan's seventh most populous city in 2017 census.
          </p>
          <p>
          Multan is known as the 'City of Pirs and Shrines', and is a prosperous city of bazaars, mosques and superbly designed tombs. The Multan International Airport connects flights to major cities in Pakistan and to cities in the Persian Gulf.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <div className="image-container">
            <img src="assets/img/multan.jpg" style={{ objectFit: 'cover' }} width="500px" height="350px" alt="Image of ISLAMABAD" className={`thumbnail`} data-video-src={videos[4]} />
            <div className={`play-button play-button-2`} onClick={() => playVideo(4)}>&#9658;</div>
            <div className={`video-overlay video-overlay-2`}>
              <iframe width="500" height="350" src={videos[4]} title="Video of MULTAN" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="finish" style={{ margin: 'auto', marginTop: '-70px', height: '100px', width: '10px', backgroundColor: 'orange' }}></div>
<section key={5} id="about" style={{ marginTop: "-200px" }}>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div style={{ color: 'white' }} className="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
          <h2>KARACHI</h2>
          <p>
          Karachi is the largest city in Pakistan and 12th largest in the world, with a population of over 20 million. It is situated at the southern tip of the country along the Arabian Sea coast. It is the former capital of Pakistan and capital of the province of Sindh.
          </p>
          <p>
          Karachi, the capital of Sindh and the biggest metropolitan city of Pakistan is known for its diverse culture, advanced education system, rich cuisine, historical sites, best shopping malls, top cinemas and various farmhouses and of course, the beautiful deep blue sea.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <div className="image-container">
            <img src="assets/img/karachi.jpg" style={{ objectFit: 'cover' }} width="500px" height="350px" alt="Image of ISLAMABAD" className={`thumbnail`} data-video-src={videos[5]} />
            <div className={`play-button play-button-2`} onClick={() => playVideo(5)}>&#9658;</div>
            <div className={`video-overlay video-overlay-2`}>
              <iframe width="500" height="350" src={videos[5]} title="Video of KARACHI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer Section */}
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
    </div>
  );
}

export default FavoriteCity;
