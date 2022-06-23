import './App.css';
import imageHero from './Images/hero.svg';
import { noroff, codecademy, abaris, power } from './Components/About';
import { Link } from 'react-router-dom';
import imagePB from './Images/pb.jpg';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>I am a Frontend<br /> student and a Junior<br /> developer</h1>
        <img src={imageHero} alt="illustration of me" className="hero" />
      </header>
      <section className="app-section">
        <h2>Short about me</h2>
        <ul>
          <li>
            <p>I am 25 years old and currently live in Lillehammer, Norway.</p>
          </li>
          <li>
            <p>I have recently worked a few years as a sales & department manager at {power}.</p>
          </li>
          <li>
            <p>I am a Frontend student at {noroff}</p>
          </li>
          <li>
            <p>I am a Junior developer at {abaris}</p>
          </li>
        </ul>
        <img src={imagePB} alt="Picture of me" className="pb" />
      </section>
      <footer>
        <Link id="link-about" to="/about"><a className="cta cta-more" href="#">More info</a></Link>
      </footer>
    </div>
  );
}

export default App;
