import React from 'react'
import { useClassroom } from '../../../../application/hooks'

export const ClassroomsPagination: React.FC = () => {

  const { paginationClassrooms } = useClassroom()
  const { currentPage, nextPage, prevPage, totalPages } = paginationClassrooms

  return (
    <div className="classrooms-pagination">
      <div className='pagination'>
        <button 
          disabled={ currentPage === 1 }  
          className={`pagination__button`}
        >
          <i className='bx bx-chevron-left pagination__icon'></i>
        </button>
        <div className="pagination__number">{currentPage}</div>
        <button className="pagination__button">
          <i className='bx bx-chevron-right pagination__icon'></i>
        </button>
      </div>
    </div>
  )
}
