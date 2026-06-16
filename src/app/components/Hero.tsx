import { Mail, Github, Download } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-56px)] flex items-center justify-center px-6 md:px-16"
      style={{ paddingTop: '56px' }}
    >
      {/* Background layer — subtle spotlight from top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 55% 45% at 60% 45%, rgba(59, 130, 246, 0.06) 0%, transparent 70%)'
        }}
      />

      <div className="relative w-full max-w-5xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">

          {/* ── Left: text content ── */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border font-['JetBrains_Mono'] reveal"
              style={{
                background: 'var(--brand-glow)',
                borderColor: 'var(--border-color)',
                color: 'var(--brand)',
                fontSize: '11px'
              }}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: 'var(--brand)', animation: 'blink 2s infinite' }}
              />
              disponível para novas oportunidades
            </div>

            {/* Name */}
            <h1
              className="font-['Plus_Jakarta_Sans'] mb-4 reveal"
              style={{
                fontSize: 'clamp(1.9rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--white)'
              }}
            >
              lucas gomes <span style={{ color: 'var(--brand)' }}>cruz</span>
            </h1>

            {/* Title */}
            <h2
              className="font-['JetBrains_Mono'] mb-6 reveal"
              style={{
                fontSize: 'clamp(0.8rem, 2.5vw, 1.1rem)',
                color: 'var(--brand2)'
              }}
            >
              desenvolvedor fullstack
            </h2>

            {/* Tagline */}
            <p
              className="max-w-[520px] mb-10 reveal"
              style={{
                color: 'var(--muted-text)',
                fontSize: 'clamp(0.875rem, 2vw, 1.0625rem)',
                lineHeight: 1.75
              }}
            >
              transformo requisitos de negócio em soluções técnicas escaláveis.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 reveal w-full sm:w-auto">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg transition-all duration-300"
                style={{
                  background: 'var(--brand)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  letterSpacing: '0.01em'
                }}
                aria-label="ir para seção de contato"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--brand2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--brand)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Mail size={15} />
                entrar em contato
              </button>

              <a
                href={import.meta.env.BASE_URL + 'curriculo.pdf'}
                download
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg transition-all duration-300 border"
                style={{
                  borderColor: 'var(--border-color)',
                  color: 'var(--white2)',
                  fontWeight: 500,
                  fontSize: '0.875rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--brand-glow)';
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                  e.currentTarget.style.color = 'var(--brand2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--white2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Download size={15} />
                currículo
              </a>

              <a
                href="https://github.com/lucasgomescruz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg transition-all duration-300 border"
                style={{
                  borderColor: 'var(--border-color)',
                  color: 'var(--white2)',
                  fontWeight: 500,
                  fontSize: '0.875rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--brand-glow)';
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                  e.currentTarget.style.color = 'var(--brand2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--white2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Github size={15} />
                github
              </a>
            </div>
          </div>

          {/* ── Right: photo slot (simplified) ── */}
          <div className="shrink-0 reveal">
            <div
              className="relative flex items-center justify-center"
              style={{ width: 'clamp(200px, 28vw, 320px)', height: 'clamp(200px, 28vw, 320px)' }}
            >
              <div
                style={{
                  borderRadius: '9999px',
                    padding: '6px',
                    border: '2px solid var(--brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'transparent'
                }}
              >
                <img
                  src={import.meta.env.BASE_URL + 'photo.jpg'}
                  alt="lucas cruz"
                  className="relative w-full h-full rounded-full object-cover object-center"
                  style={{ width: '100%', height: '100%', borderRadius: '9999px', display: 'block' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
              </div>

              {/* Initials fallback (hidden when photo loads) */}
              <div
                className="absolute inset-0 rounded-full items-center justify-center"
                style={{
                  display: 'none',
                  background: 'var(--navy2)',
                  borderRadius: '9999px'
                }}
              >
                <span
                  className="font-['Plus_Jakarta_Sans']"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--brand)' }}
                >
                  lc
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}