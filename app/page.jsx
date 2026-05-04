import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero
          headline="MUSIC / DRINKS / CULTURE"
          subheadline="demo 123, Buenos Aires, Argentina"
        />
        <About />
        <Experience />
        <Gallery />
        <Events />
        <Menu />
        <Reservations />
      </main>
      <Footer />
    </>
  );
}
