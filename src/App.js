import { useState } from 'react';
import './App.css';
import FooterLink from './components/Link';
import NavBar from './components/Navbar';

// ORIGINAL WEBSITE LINK: https://flickr.com/

function App() {

  const images = [
    'url("/images/1.jpg")',
    'url("/images/2.jpg")',
    'url("/images/3.jpg")',
    'url("/images/4.jpg")',
    'url("/images/5.jpg")',
    'url("/images/6.jpg")',
    'url("/images/7.jpg")',
    'url("/images/8.jpg")',
    'url("/images/9.jpg")',
    'url("/images/10.jpg")',
    'url("/images/11.jpg")',
    'url("/images/12.jpg")',
    'url("/images/13.jpg")',
    'url("/images/14.jpg")',
    'url("/images/15.jpg")'

  ];

  const [image, setImage] = useState(images[13]);

    setTimeout(() => {
      let index = Math.floor(Math.random() * images.length); // select a random image from images array
      setImage(images[index])
    }, 10000);
  return (
    <>
      {/* body content */}
      <div className='main-content' style={{backgroundImage: image}}> {/* change backgroundImage every 5 seconds */}
        {/* navbar */}
        <NavBar></NavBar>
        {/* title & subtitle */}
        <div className='picture-text'>
          <h1 className='title'>Find your inspiration.</h1>
          <h3 className='subtitle'>Join the Flickr community, home to tens of billions of photos and 2 million groups.</h3>
          <button className='start-button'>Start for free</button>
        </div>
      </div>
      {/* footer */}
      <footer className='external-link'>
        <FooterLink text="About" link="https://www.flickr.com/about"></FooterLink>
        <FooterLink text="Jobs" link="https://flickr.com/jobs"></FooterLink>
        <FooterLink text="Blog" link="https://blog.flickr.net/en"></FooterLink>
        <FooterLink text="Developers" link="https://www.flickr.com/services/developer"></FooterLink>
        <FooterLink text="Guidelines" link="https://flickr.com/help/guidelines"></FooterLink>
        <FooterLink text="Help" link="https://www.flickrhelp.com/hc/en-us"></FooterLink>
        <FooterLink text="Help forum" link="https://www.flickr.com/help/forum/en-us/"></FooterLink>
        <FooterLink text="Privacy" link="https://flickr.com/help/privacy"></FooterLink>
        <FooterLink text="Terms" link="https://flickr.com/help/terms"></FooterLink>
        <FooterLink text="Cookies"></FooterLink>
        <FooterLink text="English"></FooterLink>
        <FooterLink text="SmugMug+Flickr." link="https://www.smugmug.com/"></FooterLink>
        {/* social media logos */}
        <span className='fa-brands fa-square-facebook'></span>
        <span className='fa-brands fa-twitter'></span>
        <span className='fa-brands fa-instagram'></span>
      </footer>
    </>
  );
}

export default App;
