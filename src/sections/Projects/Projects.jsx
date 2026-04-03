import './Projects.css';

const projects = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format',
    alt: 'Edifício residencial',
    category: 'Estrutural · Concreto Armado',
    name: 'Residencial Porto Alegre',
    detail: 'Teresina, PI · 2023 · 18 pavimentos',
    tag: 'Destaque',
    featured: true,
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80&auto=format',
    alt: 'Ponte',
    category: 'Infraestrutura',
    name: 'Ponte sobre Rio Poti',
    detail: 'Piripiri, PI · 2022',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80&auto=format',
    alt: 'Galpão industrial',
    category: 'Industrial · Metálica',
    name: 'Galpão Logístico Central',
    detail: 'Timon, MA · 2024',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80&auto=format',
    alt: 'Condomínio',
    category: 'Residencial · Fundações',
    name: 'Condomínio Mirante do Rio',
    detail: 'Teresina, PI · 2021',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1571168600248-db88dfcae9c2?w=600&q=80&auto=format',
    alt: 'Escola',
    category: 'Institucional',
    name: 'Escola Estadual N. Sra. da Paz',
    detail: 'Floriano, PI · 2022',
  },
];



function Projects() {
  return (
    <section className={"projects"} id="projetos">
      <div className={`${'header'} `}>
        <div>
          <p className="section-tag">Portfólio</p>
          <h2 className={'title'}>
            Obras que <em>marcam</em>o território.
          </h2>
        </div>
        <a href="#contato" className="btn-outline">Ver todos →</a>
      </div>

      <div className={'grid'}>
        {projects.map((p) => (
          <div
            key={p.id}
            className={`${'cardProject'} ${p.featured ? 'featured' : ''} `}
          >
            <img
              className={'img'}
              src={p.img}
              alt={p.alt}
            />
            <div className={'overlay'}>
              <span className={'category'}>{p.category}</span>
              <div className={'name'}>{p.name}</div>
              <div className={'detail'}>{p.detail}</div>
            </div>
            {p.tag && <span className={'tag'}>{p.tag}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}


export default Projects;