import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Controls({ onOpenCart, itemCount, totalAmount }) {
  return (
    <div className="Controls">
      <div className="Controls-info">
        {itemCount > 0
          ? <>
              В корзине: <span className="Controls-info-bold">{itemCount} товара</span> / <span className="Controls-info-bold">{totalAmount} ₽</span>
            </>
          : <> В корзине: <span className="Controls-info-bold"> пусто</span> </> }
      </div>
      <button onClick={onOpenCart}>Перейти</button>
    </div>
  );
}

Controls.propTypes = {
  onOpenCart: PropTypes.func.isRequired,
  itemCount: PropTypes.number.isRequired,
  totalAmount: PropTypes.number.isRequired,
};

export default React.memo(Controls);
