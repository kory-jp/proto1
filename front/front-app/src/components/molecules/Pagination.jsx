import React, { memo } from 'react'
import ReactPaginate from "react-paginate"

const ONE_PAGE_DISPLAY_POSTS = 10;
const LAST_DISPLAY_SIZE = 20;
const AROUND_DISPLAY_PAGES = 5;

export const Pagination = memo((props)=> {
  const { postSize, handleSearchPost, setCurrentPageNumber} = props;

  const handlePaginate = (selectedItem)=> {
    const page = selectedItem.selected + 1;
    setCurrentPageNumber(page);
    handleSearchPost();
  }

  const arrowIcon = (iconName) => {
    return (
      <i class="fas fa-chevron-${iconName}"></i>
    );
  };

  const calculatePageCount = () => {
    return Math.ceil( postSize / ONE_PAGE_DISPLAY_POSTS )
  }
  return(
    <ReactPaginate
    pageCount={calculatePageCount()}
    marginPagesDisplayed={LAST_DISPLAY_SIZE}
    pageRangeDisplayed={AROUND_DISPLAY_PAGES}
    onPageChange={handlePaginate}
    containerClassName="pagination"
    pageClassName="page-item"
    pageLinkClassName="page-link"
    activeClassName="active"
    activeLinkClassName="active"
    previousLinkClassName="previous-link"
    nextLinkClassName="next-link"
    previousLabel={arrowIcon('left')}
    nextLabel={arrowIcon('right')}
    disabledClassName="disabled-button"
  />
  )
})

export default Pagination;