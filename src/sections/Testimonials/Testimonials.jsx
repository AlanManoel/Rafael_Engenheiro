import {useState} from 'react';
import './Testimonials.css';

const testimonials = [
    {
        text: 'O Rafael entregou o projeto estrutural do nosso edifício com precisão cirúrgica. Nenhuma intercorrência durante a obra. Profissional raro.',
        author: 'Carlos Mendes',
        company: 'Construtora Mendes & Filhos, Teresina',
    },
    {
        text: 'O laudo técnico foi fundamental para resolvermos a questão judicial. Relatório impecável, linguagem clara e prazo cumprido. Recomendo sem reservas.',
        author: 'Dra. Ana Lima',
        company: 'Lima Advocacia, Teresina',
    },
    {
        text: 'Contratei para gerenciar nossa obra comercial. Resultado: economia de 12% no orçamento e entrega 3 semanas antes do prazo. Excelente trabalho.',
        author: 'Marcos Souza',
        company: 'Grupo Ômega, Floriano',
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);

    const goTo = (i) => {
        setFade(false);
        setTimeout(() => {
            setCurrent(i);
            setFade(true);
        }, 300);
    };

    const t = testimonials[current];

    return (
        <section className={'testimonials'}>
            <div className={'inner'}>
                <p className="section-tag " style={{ justifyContent: 'center' }}>
                    Depoimentos
                </p>

                <div style={{ opacity: fade ? 1 : 0, transition: 'opacity 0.3s' }}>
                    <blockquote className={`${'quote'} `}>
                        {t.text}
                    </blockquote>
                    <p className={`${'author'} `}>
                        <strong>{t.author}</strong> — {t.company}
                    </p>
                </div>

                <div className={'dots'}>
                    {testimonials.map((_, i) => (
                        <div
                            key={i}
                            className={`${'dot'} ${i === current ? 'active' : ''}`}
                            onClick={() => goTo(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
