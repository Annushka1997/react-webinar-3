import { memo, useMemo } from 'react';
import { cn as bem } from '@bem-react/classname';
import PageButton from '../page-button';
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import { getPaginationButtons } from '../../utils';
import './style.css';

const Pagination = () => {
  const store = useStore();
  const cn = bem('Pagination');

  const { currentPage, itemsPerPage, totalItems } = useSelector(state => ({
    currentPage: state.catalog.page,
    itemsPerPage: state.catalog.limit,
    totalItems: state.catalog.count,
  }));

  const handlePageChange = (page) => {
    store.actions.catalog.setPage(page);
  };

  const paginationButtons = useMemo(() => 
    getPaginationButtons(currentPage, itemsPerPage, totalItems), 
    [currentPage, itemsPerPage, totalItems]
  );

  return (
    <div className={cn()}>
      {paginationButtons.map(pageNumber =>
        pageNumber ? (
          <PageButton
            key={pageNumber}
            number={pageNumber}
            isSelected={pageNumber === currentPage}
            onClick={() => handlePageChange(pageNumber)} // Передача номера страницы
          />
        ) : (
          <span key={`divider-${pageNumber}`} className={cn('divider')}>...</span>
        ),
      )}
    </div>
  );
};

export default memo(Pagination);
