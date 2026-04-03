import './About.css';


const specialties = [
    {
        icon: '🏗',
        title: 'Projetos Estruturais',
        desc: 'Concreto armado, protendido e estruturas metálicas. Dimensionamento e detalhamento completo.',
    },
    {
        icon: '🔩',
        title: 'Fundações',
        desc: 'Fundações rasas e profundas. Análise de solo, SPT e dimensionamento de estacas.',
    },
    {
        icon: '📋',
        title: 'Laudos Técnicos',
        desc: 'Perícias, laudos de patologias, vistoria em obras e relatórios para uso judicial.',
    },
    {
        icon: '📐',
        title: 'Gerenc. de Obras',
        desc: 'Planejamento, controle de qualidade, cronograma físico-financeiro e fiscalização.',
    },
];

const credentials = [
    'Mestre em Engenharia de Estruturas · UFPI',
    'CREA–PI ativo · ART emitida por projeto',
    'Especialista em Patologia das Construções',
    'Certified BIM Professional · Autodesk Revit',
];


function About() {
    return (
        <section className={'about'} id="sobre">
            {/* LEFT */}
            <div className={'left'}>
                <p className="section-tag">Sobre</p>
                <h2 className={'title'}>
                    Engenharia é a<br /><em>arte de resolver</em><br />o impossível.
                </h2>
                <p className={'text'}>
                    Com mais de 16 anos de atuação, desenvolvo projetos estruturais, laudos técnicos
                    e consultoria para obras residenciais, comerciais e industriais em todo o Piauí.
                </p>
                <p className={`${'text'} `}>
                    Minha abordagem combina rigor técnico, domínio de normas ABNT e uso de tecnologias
                    BIM para entregar soluções que unem segurança, eficiência e economia.
                </p>
                <div className={`${'credentials'} `}>
                    {credentials.map((c) => (
                        <div key={c} className={'credentialItem'}>{c}</div>
                    ))}
                </div>
            </div>

            {/* RIGHT */}
            <div className={'right'}>
                <p className="section-tag ">Especialidades</p>
                <h3 className={`${'specialtiesTitle'} `}>
                    O que posso<br /><em>fazer por você</em>
                </h3>
                <div className={'grid'}>
                    {specialties.map((s) => (
                        <div key={s.title} className={`${'card'} `}>
                            <div className={'cardIcon'}>{s.icon}</div>
                            <div className={'cardTitle'}>{s.title}</div>
                            <div className={'cardDesc'}>{s.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default About;