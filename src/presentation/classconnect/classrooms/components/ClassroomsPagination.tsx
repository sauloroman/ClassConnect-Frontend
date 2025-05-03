import React from 'react'
import { useClassroom } from '../../../../application/hooks'

export const ClassroomsPagination: React.FC = () => {

  const { paginationClassrooms, onNextPage, onPrevPage } = useClassroom()
  const { nextPage, prevPage, currentPage, totalPages } = paginationClassrooms

  return (
    <div className="classrooms-pagination">
      <div className='pagination'>
        <button 
          onClick={ onPrevPage }
          disabled={ !prevPage }  
          className={`
            pagination__button 
            ${ !prevPage && 'pagination__button--disabled'}
          `}
        >
          <i className='bx bx-chevron-left pagination__icon'></i>
        </button>
        <div className="pagination__number">{currentPage} de {totalPages}</div>
        <button
          onClick={ onNextPage }
          disabled={ !nextPage } 
          className={`pagination__button ${ !nextPage && 'pagination__button--disabled'}`}
        >
          <i className='bx bx-chevron-right pagination__icon'></i>
        </button>
      </div>
    </div>
  )
}
