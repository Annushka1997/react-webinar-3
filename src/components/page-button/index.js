import PropTypes from 'prop-types';
import { memo } from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function PageButton({ onClick, number, isSelected }) {
  const cn = bem('PageButton');

  return (
    <button
      onClick={() => onClick(number)}
      className={cn('')}
      disabled={isSelected}
    >
      {number}
    </button>
  );
}

PageButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default memo(PageButton);
