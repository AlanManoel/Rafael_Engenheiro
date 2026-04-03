import React from 'react';
import './Marquee.css';


const marqueeItems = [
  'Projetos Estruturais',
  'Fundações',
  'Laudos Técnicos',
  'Gerenciamento de Obras',
  'Perícias',
  'Consultoria',
];

export default function Marquee() {
  // Duplicate for seamless loop
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className={'wrap'}>
      <div className={'track'}>
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <span className={'item'}>{item}</span>
            <span className={'dot'}>◆</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
