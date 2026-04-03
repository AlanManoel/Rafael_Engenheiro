import './Process.css';



const steps = [
    {
        number: '01',
        title: 'Diagnóstico',
        desc: 'Visita técnica, análise do terreno, levantamento de cargas e requisitos normativos.',
    },
    {
        number: '02',
        title: 'Projeto',
        desc: 'Modelagem BIM, dimensionamento estrutural, memoriais de cálculo e pranchas técnicas.',
    },
    {
        number: '03',
        title: 'Aprovação',
        desc: 'Emissão de ART, submissão ao CREA e acompanhamento junto a órgãos municipais.',
    },
    {
        number: '04',
        title: 'Acompanhamento',
        desc: 'Visitas à obra, controle de qualidade e entrega de relatórios de conformidade.',
    },
];

export default function Process() {
    return (
        <section className={'process'} id="processo">
            <h2 className={`${'title'} `}>
                Do estudo ao acabamento —{' '}
                <em>cada etapa com excelência.</em>
            </h2>

            <div className={'steps'}>
                {steps.map((s) => (
                    <div key={s.number} className={`${'step'} `}>
                        <div className={'stepNumber'}>{s.number}</div>
                        <div className={'stepTitle'}>{s.title}</div>
                        <div className={'stepDesc'}>{s.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
