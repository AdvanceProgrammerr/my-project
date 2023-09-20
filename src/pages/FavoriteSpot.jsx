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

const FavoriteSpot = () => {
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
    "https://www.youtube.com/embed/owMUCzst7I0",
    "https://www.youtube.com/embed/fssoZaWJs88?si=bVIBqnWrsIj5rTxY",
    "https://www.youtube.com/embed/zxIImL5GlKs?si=vV-OkArcjfW-lwj_",
    "https://www.youtube.com/embed/1j9wYgK88hM?si=8ow2yUWDYhH_3Zij",
    "https://www.youtube.com/embed/8z7rgZBl9Rk?si=JvKZo0TGFoO0gyUw",
    "https://www.youtube.com/embed/tMZj4FEXKuo",
  ];

  const spotyData = [
    {
      spotName: "SWAT VALLEY",
      imageSrc: "assets/img/swat.jpg" ,
      sectionNumber: 0,
    },
    {
      spotName: "NEELUM VALLEY",
      imageSrc: "assets/img/neelum.jpg",
      sectionNumber: 1,
    },
    {
      spotName: "NARAN VALLEY",
      imageSrc: "assets/img/naran.jpg",
      sectionNumber: 2,
    },
    {
      spotName: "HUNZA VALLEY",
      imageSrc: "assets/img/hunza.jpg",
      sectionNumber: 3,
    },
    {
      spotName: "FAISAL MOSQUE",
      imageSrc: "assets/img/faisalmo.jpg",
      sectionNumber: 4,
    },
    {
      spotName: "BADSHAI MOSQUE",
      imageSrc: "assets/img/badshaimo.jpg",
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
                <h2>MY Favorite Tourist Spots</h2>
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
          <h2>SWAT VALLEY</h2>
          <p>
          Swat District, also known as the Swat Valley, is a district in the Malakand Division of Khyber Pakhtunkhwa, Pakistan. With a population of 2,309,570 per the 2017 national census, Swat is the 15th-largest district of Khyber Pakhtunkhwa with many popular tourist attractions.       </p>
          <p>
          Swat Valley (Swat) is known as the 'Switzerland' of Pakistan because of its snow-capped mountains and beautiful scenery. Once a Taliban stronghold, there was not peace in the Valley until the Pakistan military forces conducted special operations and purified the whole area.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <div className="image-container">
            <img src="assets/img/swat.jpg" style={{ objectFit: 'cover' }} width="500px" height="350px" alt="Image of LAHORE" className={`thumbnail`} data-video-src={videos[0]} />
            <div className={`play-button play-button-0`} onClick={() => playVideo(0)}>&#9658;</div>
            <div className={`video-overlay video-overlay-0`}>
              <iframe width="500" height="350" src={videos[0]} title="Video of SWAT VALLEY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            
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
          <h2>NEELUM VALLEY</h2>
          <p>
          Neelum is a district of Pakistan-administered Azad Kashmir in the disputed Kashmir region. It is the northernmost of 10 districts located within the Pakistani-administered territory of Azad Kashmir. Taking up the larger part of the Neelum Valley, the district has a population of around 191,000 people.
          </p>
          <p>
          The Neelum Valley is famous for Lush green Meadows, Dense Forests, Delightful Weather, and Fresh Enchanting Waters.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <div className="image-container">
            <img src="assets/img/neelum.jpg" style={{ objectFit: 'cover' }} width="500px" height="350px" alt="Image of FAISALABAD" className={`thumbnail`} data-video-src={videos[1]} />
            <div className={`play-button play-button-1`} onClick={() => playVideo(1)}>&#9658;</div>
            <div className={`video-overlay video-overlay-1`}>
              <iframe width="500" height="350" src={videos[1]} title="Video of NEELUM VALLEY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              
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
          <h2>NARAN VALLEY</h2>
          <p>
          Naran is a town and popular tourist destination in upper Kaghan Valley in the Mansehra District of the Khyber Pakhtunkhwa province of Pakistan. It is located 119 kilometers from Mansehra city at the altitude of 2,409 meters. It is located about 65 kilometers away from Babusar Top.
          </p>
          <p>
          Naran Kaghan is famous as a tourist destination, owing to its pleasant weather in peak season every year thousands of tourists rush to explore the valley. It is also the gateway to Gilgit Hunza in Summers by Babusar Pass. Naran Bazaar is very crowded in the summers with hotels and restaurants offering their services.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <div className="image-container">
            <img src="assets/img/naran.jpg" style={{ objectFit: 'cover' }} width="500px" height="350px" alt="Image of ISLAMABAD" className={`thumbnail`} data-video-src={videos[2]} />
            <div className={`play-button play-button-2`} onClick={() => playVideo(2)}>&#9658;</div>
            <div className={`video-overlay video-overlay-2`}>
              <iframe width="500" height="350" src={videos[2]} title="NARAN VALLEY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            
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
          <h2>HUNZA VALLEY</h2>
          <p>
          The Hunza Valley is a mountainous valley in the northern part of the Gilgit-Baltistan region of Pakistan.
          </p>
          <p>
          The Ruby mines are famous tourist attractions. The Hunza valley is popular for its snow-capped and rough mountains. Many people came to Hunza just to get a few glimpses of the shining ice wall of the Rakaposhi Mountain. Other popular mountains in Hunza include Passu Peak, Ultra Peak, and Kuksel Sar.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <div className="image-container">
            <img src="assets/img/hunza.jpg" style={{ objectFit: 'cover' }} width="500px" height="350px" alt="Image of ISLAMABAD" className={`thumbnail`} data-video-src={videos[3]} />
            <div className={`play-button play-button-2`} onClick={() => playVideo(3)}>&#9658;</div>
            <div className={`video-overlay video-overlay-2`}>
              <iframe width="500" height="350" src={videos[3]} title="HUNZA VALLEY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       
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
          <h2>FAISAL MOSQUE</h2>
          <p>
          The Faisal Mosque is the national mosque of Pakistan, located in the capital city, Islamabad. It is the fifth-largest mosque in the world and the largest within South Asia, located on the foothills of Margalla Hills in Islamabad. It is named after the late King Faisal of Saudi Arabia.
          </p>
          <p>
          The Faisal Mosque is the largest mosque in Pakistan, located in the national capital city of Islamabad. Completed in 1986, it was designed by Turkish architect Vedat Dalokay, shaped like a desert Bedouin's tent, is an iconic symbol of Islamabad throughout the world.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <div className="image-container">
            <img src="assets/img/faisalmo.jpg" style={{ objectFit: 'cover' }} width="500px" height="350px" alt="Image of ISLAMABAD" className={`thumbnail`} data-video-src={videos[4]} />
            <div className={`play-button play-button-2`} onClick={() => playVideo(4)}>&#9658;</div>
            <div className={`video-overlay video-overlay-2`}>
              <iframe width="500" height="350" src={videos[4]} title="Video of FAISAL MOSQUE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              
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
          <h2>BADSHI MOSQUE</h2>
          <p>
          The Badshahi Mosque is an iconic Mughal-era congregational mosque in Lahore, capital of the Pakistani province of Punjab. The mosque is located opposite of Lahore Fort in the outskirts of the Walled City of Lahore, and is widely considered to be one of Lahore's most iconic landmarks.
          </p>
          <p>
          The mosque is an important example of Mughal architecture, with an exterior that is decorated with carved red sandstone with marble inlay. It remains the largest mosque of the Mughal-era, and is the third-largest mosque in Pakistan.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <div className="image-container">
            <img src="assets/img/badshaimo.jpg" style={{ objectFit: 'cover' }} width="500px" height="350px" alt="Image of ISLAMABAD" className={`thumbnail`} data-video-src={videos[5]} />
            <div className={`play-button play-button-2`} onClick={() => playVideo(5)}>&#9658;</div>
            <div className={`video-overlay video-overlay-2`}>
              <iframe width="500" height="350" src={videos[5]} title="Video of BADSHI MOSQUE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
             
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

export default FavoriteSpot;
