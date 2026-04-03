import './Hero.css';

const stats = [
    { number: '120+', label: 'Projetos concluídos' },
    { number: '16', label: 'Anos de experiência' },
    { number: '98%', label: 'Satisfação de clientes' },
];

function Hero() {
    return (
        <section className={'hero'}>

            <div className={'heroLeft'}>

                <p className={'eyebrow'}>Engenheiro Civil · CREA–PI 1922963500</p>

                <h1 className={'title'}>
                    Construindo<br />
                    com <em>precisão</em><br />
                    e visão
                </h1>

                <p className={'sub'}>
                    Projetos estruturais e de fundação<br />
                    que resistem ao tempo.
                </p>

                <div className={'cta'}>
                    <a href="#projetos" className="btn-primary">Ver projetos →</a>
                    <a href="#sobre" className="btn-outline">Sobre mim</a>
                </div>
            </div>


            <div className={'heroRight'}>
                <div className={'imageWrapper'}>
                    <div />
                    <img src="src/assets/perfil.webp" alt="Perfil Profissional" />

                    <div className={'stats'}>
                        {stats.map((s) => (
                            <div key={s.label} className={'stat'}>
                                <div className={'statNumber'}>{s.number}</div>
                                <div className={'statLabel'}>{s.label}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;