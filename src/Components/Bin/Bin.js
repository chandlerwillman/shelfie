import React from 'react'
// import { Link } from 'react-router-dom';

export default function Product(props) {
  const { index } = props;

  return (
    <div>
      <button className="button is-primary">Bin {index}</button>
    </div>
  )
};