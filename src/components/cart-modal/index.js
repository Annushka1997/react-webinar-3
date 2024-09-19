import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function CartModal({ cartItems, onRemoveFromCart, onClose }) {
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.count, 0);

  return (
    <div className="CartModal">
      <div className="CartModal-header">
        <h2 className="CartModal-title">Корзина</h2>
        <button className="CartModal-close" onClick={onClose}>Закрыть</button>
      </div>
      <div className="CartModal-content">
        {cartItems.length ? (
          <div className="CartModal-items">
            {cartItems.map(item => (
              <div key={item.code} className="CartModal-item">
                <div className="CartModal-item-info">
                <div className="CartModal-item-number">{item.code}</div>
                  <div className="CartModal-item-title">{item.title}</div>
                </div>
                <div className="CartModal-item-details">
                  <div className="CartModal-item-price">{item.price} ₽</div>
                  <div className="CartModal-item-quantity">{item.count} шт.</div>
                  <button className="CartModal-item-remove" onClick={() => onRemoveFromCart(item.code)}>Удалить</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="CartModal-empty">Корзина пуста</div>
        )}
      </div>
      <div className="CartModal-footer">
        <span className="CartModal-total">Итого: {totalAmount} ₽</span>
      </div>
    </div>
  );
}

CartModal.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      title: PropTypes.string,
      count: PropTypes.number,
      price: PropTypes.number,
    })
  ).isRequired,
  onRemoveFromCart: PropTypes.func,
  onClose: PropTypes.func,
};

CartModal.defaultProps = {
  onRemoveFromCart: () => {},
  onClose: () => {},
};

export default React.memo(CartModal);
