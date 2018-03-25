import React from 'react';

import './GifCard.scss';

const bgColors = [
  'antiqueWhite',
  'aquamarine',
  'Lavender',
  'LightCoral',
  'LightSalmon',
  'OliveDrab',
  'PaleVioletRed',
  'Pink',
  'Plum',
];

export const GifCard = (props) => {
  const itemStyle = {
    backgroundColor: bgColors[(Math.random()*bgColors.length)>>0]
  };
  const {
    gif,
    key,
    type='fixed_width',
    onClick
  } = props;
  return (
    <li className="gifCard" style={itemStyle} key={key} onClick={onClick}>
      <img alt={gif.slug}
          src={gif.images[type].url}
      />
    </li>
  );
}