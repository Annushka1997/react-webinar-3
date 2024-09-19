import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Item({ item, onAddToCart = () => {}, onRemove = () => {} }) {
  const callbacks = {
    onAdd: () => {
      onAddToCart(item.code);
    },
    onRemove: e => {
      e.stopPropagation();
      onRemove(item.code);
    },
  };

  return (
    <div className="Item">
      <div className="Item-code">{item.code}</div>
      <div className="Item-title">{item.title}</div>
      <div className="Item-details">
        <span className="Item-price">{item.price} ₽</span>
        <button onClick={callbacks.onAdd}>Добавить</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onAddToCart: PropTypes.func,
  onRemove: PropTypes.func,
};

export default React.memo(Item);
