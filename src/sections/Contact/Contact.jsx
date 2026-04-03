import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => setSent(true);

  return (
    <section className={'contact'} id="contato">
      {/* LEFT */}
      <div className={'left'}>
        <p className="section-tag">Contato</p>
        <h2 className={'title'}>
          Vamos construir<br />algo juntos?
        </h2>
        <p className={'intro'}>
          Entre em contato para solicitar orçamento, tirar dúvidas ou agendar uma visita técnica.
        </p>
        <div className={'info'}>
          {[
            { icon: '✉', text: 'rcmartinsp2@gmail.com' },
            { icon: '☎', text: '(86) 99528-0662' },
            { icon: '📍', text: 'Rua costa e silva 856, Bairro Santa Fé' },
            { icon: '🕐', text: 'Seg–Sex: 08h – 18h' },
          ].map((item) => (
            <div key={item.text} className={'infoItem'}>
              <div className={'infoIcon'}>{item.icon}</div>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className={'right'}>
        <p className="section-tag" style={{ color: 'var(--copper)' }}>
          Solicitar orçamento
        </p>
        <div className={'form'}>
          <div className={'group'}>
            <label className={'label'}>Nome completo</label>
            <input
              name="name"
              className={'input'}
              placeholder="Seu nome"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className={'group'}>
            <label className={'label'}>E-mail</label>
            <input
              name="email"
              type="email"
              className={'input'}
              placeholder="email@exemplo.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className={'group'}>
            <label className={'label'}>Tipo de projeto</label>
            <input
              name="type"
              className={'input'}
              placeholder="Ex: Projeto estrutural residencial"
              value={form.type}
              onChange={handleChange}
            />
          </div>
          <div className={'group'}>
            <label className={'label'}>Mensagem</label>
            <textarea
              name="message"
              className={'textarea'}
              placeholder="Descreva brevemente sua necessidade..."
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button
            className={'submit'}
            onClick={handleSubmit}
            style={sent ? { background: '#5a8a4a' } : {}}
          >
            {sent ? 'Mensagem enviada ✓' : 'Enviar mensagem →'}
          </button>
        </div>
      </div>
    </section>
  );
}
