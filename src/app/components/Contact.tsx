import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contato@lgcdev.com',
      link: 'mailto:contato@lgcdev.com'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '(13) 99804-8091',
      link: 'tel:+5513998048091'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'lucasgomescruz',
      link: 'https://github.com/lucasgomescruz'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'lucasgomescruz',
      link: 'https://www.linkedin.com/in/lucasgomescruz'
    }
  ];

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '8fade622-db51-4166-b415-9d9b6d303700',
          subject: `Contato pelo portfólio — ${formData.name}`,
          ...formData,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    border: '1px solid var(--border-color)',
    background: 'var(--navy)',
    color: 'var(--white)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" className="max-w-[1100px] mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2
        className="font-['Plus_Jakarta_Sans'] mb-12 reveal"
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: 'var(--white)'
        }}
      >
        Contato
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          const isExternal = contact.link.startsWith('http');

          return (
            <a
              key={index}
              href={contact.link}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-6 rounded-xl border transition-all duration-300 no-underline reveal"
              style={{
                background: 'var(--navy2)',
                borderColor: 'var(--border-color)',
                transitionDelay: `${index * 80}ms`,
                minHeight: '88px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'var(--border-hover)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-lg shrink-0"
                style={{ background: 'var(--brand-glow)' }}
              >
                <Icon size={24} style={{ color: 'var(--brand)' }} />
              </div>

              <div>
                <p
                  className="font-['JetBrains_Mono'] mb-1"
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--muted-text)'
                  }}
                >
                  {contact.label}
                </p>
                <p
                  style={{
                    color: 'var(--white)',
                    fontWeight: 500
                  }}
                >
                  {contact.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Contact Form */}
      <div
        className="rounded-xl border p-8 reveal"
        style={{
          background: 'var(--navy2)',
          borderColor: 'var(--border-color)',
          transitionDelay: '320ms',
        }}
      >
        <p
          className="font-['Plus_Jakarta_Sans'] mb-6"
          style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--white)' }}
        >
          envie uma mensagem
        </p>

        {status === 'success' ? (
          <div
            className="flex items-center gap-3 p-4 rounded-xl"
            style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid var(--border-hover)' }}
          >
            <CheckCircle size={22} style={{ color: 'var(--brand)', flexShrink: 0 }} />
            <p style={{ color: 'var(--white)' }}>
              mensagem enviada com sucesso! responderei em breve.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-['JetBrains_Mono']"
                  style={{ fontSize: '0.875rem', color: 'var(--muted-text)' }}
                >
                  nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--border-hover)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-['JetBrains_Mono']"
                  style={{ fontSize: '0.875rem', color: 'var(--muted-text)' }}
                >
                  email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--border-hover)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-['JetBrains_Mono']"
                style={{ fontSize: '0.875rem', color: 'var(--muted-text)' }}
              >
                mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="como posso te ajudar?"
                value={formData.message}
                onChange={handleChange}
                style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--border-hover)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
              />
            </div>

            {status === 'error' && (
              <div
                className="flex items-center gap-3 p-3 rounded-lg"
                style={{ background: 'rgba(212, 24, 61, 0.1)', border: '1px solid rgba(212, 24, 61, 0.3)' }}
              >
                <AlertCircle size={18} style={{ color: '#d4183d', flexShrink: 0 }} />
                <p style={{ fontSize: '0.875rem', color: '#d4183d' }}>
                  erro ao enviar. tente novamente ou use o email acima.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary flex items-center justify-center gap-2 self-start"
              style={{
                opacity: status === 'loading' ? 0.7 : 1,
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              }}
            >
              {status === 'loading' ? (
                <>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ animation: 'spin 1s linear infinite' }}
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  enviando...
                </>
              ) : (
                <>
                  <Send size={18} />
                  enviar mensagem
                </>
              )}
            </button>
          </form>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder, textarea::placeholder { color: var(--muted-text); opacity: 0.6; }
      `}</style>
    </section>
  );
}
