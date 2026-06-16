import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: 'início', id: 'hero' },
    { label: 'experiência', id: 'experience' },
    { label: 'skills', id: 'skills' },
    { label: 'formação', id: 'education' },
    { label: 'contato', id: 'contact' },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 h-14 border-b"
      style={{
        background: 'rgba(10, 22, 40, 0.92)',
        backdropFilter: 'blur(12px)',
        borderColor: 'var(--border-color)'
      }}
      aria-label="Navegação principal"
    >
      <div className="max-w-[1100px] mx-auto px-6 h-full flex items-center justify-center relative">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="font-['JetBrains_Mono'] transition-colors absolute left-6"
          style={{ color: 'var(--brand)' }}
          aria-label="Voltar ao início"
        >
          lucas gomes cruz
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm transition-all duration-200 transform"
              style={{ color: 'var(--white2)', opacity: 0.9 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.color = 'var(--brand)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.color = 'var(--white2)';
                e.currentTarget.style.opacity = '0.9';
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 absolute right-6"
          style={{ color: 'var(--white)' }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-14 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: 'rgba(10, 22, 40, 0.98)' }}
          onClick={() => setIsOpen(false)}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-2xl transition-all duration-200 transform"
              style={{ color: 'var(--white)', opacity: 0.9 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.color = 'var(--brand)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.color = 'var(--white)';
                e.currentTarget.style.opacity = '0.9';
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}