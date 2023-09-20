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


const FavoritePersonality = () => {
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

<section
        style={{ backgroundColor: 'black' }}
        className="global-page-header"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h2>MY Favorite Personalities</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" style={{ marginTop: '-100px' }}>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div style={{ color: 'white' }} className="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
          <h2>
          MUHAMMAD ALI JINNAH
          </h2>
          <p>
          Muhammad Ali Jinnah was a barrister, politician and the founder of Pakistan. Jinnah served as the leader of the All-India Muslim League from 1913 until the inception of Pakistan on 14 August 1947, and then as the Dominion of Pakistan's first governor-general until his death.
          </p>
          <p>
          Mohammad Ali Jinnah December 25, 1876 – September 11, 1948) was a 20th century lawyer, politician, statesman and the founder of Pakistan. He is popularly and officially known in Pakistan as Quaid-e-Azam (“Great Leader”) and Baba-e-Qaum (“Father of the Nation”).
          </p>
        </div>
      </div>

      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <img src="assets/img/MUHAMMAD ALI.webp" width="500px" height="350px" style={{ objectFit: 'cover' }} alt="" />
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
            ALLAMA IQBAL
          </h2>
          <p>
          Sir Muhammad Iqbal, was a South Asian Muslim writer, philosopher, and politician, whose poetry in the Urdu language is considered among the greatest of the twentieth century, and whose vision of a cultural and political ideal for the Muslims of British-ruled India was to animate the impulse for Pakistan.
          </p>
          <p>
          Iqbal is widely known as one of the most important figures in Urdu and Persian literature, having written numerous volumes of poetry in both languages. After returning to Lahore in 1908, Iqbal taught philosophy and English literature while practicing law.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <img src="assets/img/Allama.jpg" width="500px" height="350px" style={{ objectFit: 'cover' }} alt="" />
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
          JUSTIN TRUDEAU
          </h2>
          <p>
          Justin Pierre James Trudeau PC MP is a Canadian politician who has been serving as the 23rd prime minister of Canada since 2015 and the leader of the Liberal Party since 2013.
          </p>
          <p>
          Trudeau was born in Ottawa and attended Collège Jean-de-Brébeuf. He graduated from McGill University in 1994 with a Bachelor of Arts degree in literature, then in 1998 acquired a Bachelor of Education degree from the University of British Columbia. After graduating he taught at the secondary school level in Vancouver, before relocating back to Montreal in 2002 to further his studies. He was chair for the youth charity Katimavik and director of the not-for-profit Canadian Avalanche Association. In 2006, he was appointed as chair of the Liberal Party's Task Force on Youth Renewal.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <img src="assets/img/Justin.webp" width="500px" height="350px" style={{ objectFit: 'cover' }} alt="" />
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
          BENAZIR BHUTTO
          </h2>
          <p>
          Benazir Bhutto was a Pakistani politician and stateswoman who served as the 11th and 13th prime minister of Pakistan from 1988 to 1990 and again from 1993 to 1996. She was the first woman elected to head a democratic government in a Muslim-majority country.
          </p>
          <p>
          Bhutto became the first female Prime Minister in a Muslim-majority country, as well as Pakistan's second nationally elected Prime Minister. At 35 years old, she was the youngest elected leader in the Islamic world, the world's youngest Prime Minister, and the youngest female Prime Minister ever elected.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <img src="assets/img/BUTTO.jpg" width="500px" height="350px" style={{ objectFit: 'cover' }} alt="" />
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
            SHAHID AFRIDI
          </h2>
          <p>
          Sahibzada Mohammad Shahid Khan Afridi is a Pakistani former cricketer and captain of the Pakistan national cricket team. An all-rounder, Afridi was a right-handed leg spinner and a right-handed batsman. Afridi made his ODI debut in 1996 against Kenya.
          </p>
          <p>
          Shahid Afridi is an All-rounder from Pakistan. He is primarily a bowler. He is known for hard hitting batting though. He held the record for fastest ODI century to over 10 years when he scored 100 runs in 37 balls against Sri Lanka in the mid 90s.

          </p>
        </div>
      </div>

      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <img src="assets/img/afridi.jpg" width="500px" height="350px" style={{ objectFit: 'cover' }} alt="" />
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
          ABDUL SATTAR EDHI
          </h2>
          <p>
          Abdul Sattar Edhi NI LPP was a Pakistani humanitarian, philanthropist and ascetic who founded the Edhi Foundation, which runs the world's largest ambulance network, along with homeless shelters, animal shelters, rehabilitation centres, and orphanages across Pakistan.
          </p>
          <p>
          Founder of the Edhi Foundation, Karachi, Pakistan, for over forty years Edhi (1928 – 2016) has been working tirelessly in favour of the poorest and destitute. He has created an extremely developed network of aid units, both fixed and mobile, which have allowed humanitarian actions to take place also in other countries.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-sm-6">
        <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
          <img src="assets/img/abdul.jpeg" width="500px" height="350px" style={{ objectFit: 'cover' }} alt="" />
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

export default FavoritePersonality;


















