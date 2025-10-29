import Header from './components/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Partnerships from './sections/Partnerships';
import Contact from './sections/Contact';
import Testimonials from './sections/Testimonials'; // New component import

function App() {
  return (
    <div className="relative min-h-screen bg-dark-navy font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero id="home" />
        <Services id="services" />
        <Partnerships id="partnerships" />
        <Testimonials id="testimonials" /> 

        <Contact id="contact" />
      </main>
      <footer className="py-8 px-5 text-center border-t border-gray-800 bg-[#0a0a0a] text-sm text-text-light">
        &copy; {new Date().getFullYear()} Asif Raza | GST & Tax Consultant. All rights reserved.
      </footer>
    </div>
  );
}

export default App;