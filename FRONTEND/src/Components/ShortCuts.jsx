import React from 'react';
import websiteDesign from '../assets/images/website-design.png';
import mobileDesign from '../assets/images/mobile-design.png';
import productDesign from '../assets/images/product-design.png';
import './Shortcuts.scss';

function Shortcuts() {
  const items = [
    {
      icon: websiteDesign,
      name: 'Website Design',
    },
    {
      icon: mobileDesign,
      name: 'Mobile Design',
    },
    {
      icon: productDesign,
      name: 'Product Design',
    },
  ];

  return (
    <div className="shortcuts">
      <div className="heading">
        <h3>Shortcuts</h3>
      </div>
      {items &&
        items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.icon} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
    </div>
  );
}

export default Shortcuts;
