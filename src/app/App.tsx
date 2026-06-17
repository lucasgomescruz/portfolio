import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Divider } from './components/Divider';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  useEffect(() => {
    // Set document metadata
    document.title = 'lucas gomes cruz | desenvolvedor fullstack';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Desenvolvedor Fullstack especializado em .NET, C#, CQRS e Clean Architecture. Transformo requisitos de negócio em soluções técnicas escaláveis.');
    }
    
    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Meta tags for SEO */}
      <title>lucas gomes cruz | desenvolvedor fullstack</title>
      <meta 
        name="description" 
        content="Desenvolvedor Fullstack especializado em .NET, C#, CQRS e Clean Architecture. Transformo requisitos de negócio em soluções técnicas escaláveis." 
      />
      <meta property="og:title" content="lucas gomes cruz | desenvolvedor fullstack" />
      <meta 
        property="og:description" 
        content="Desenvolvedor Fullstack especializado em .NET, C#, CQRS e Clean Architecture. Transformo requisitos de negócio em soluções técnicas escaláveis." 
      />

      <div lang="pt-BR">
        <Navigation />
        
        <main>
          <Hero />
          
          <Divider />
          
          <About />
          
          <Divider />
          
          <Experience />
          
          <Divider />
          
          <Skills />
          
          <Divider />
          
          <Education />
          
          <Divider />
          
          <Contact />
        </main>
        
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}