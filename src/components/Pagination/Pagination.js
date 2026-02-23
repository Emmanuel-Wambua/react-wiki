import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {

  return <ReactPaginate
  containerclassName="pagination justify-content-center gap-2 my-4"

  pageclassName="page-item"
  pageLinkclassName="page-link"

  previousclassName="page-item"
  previousLinkclassName="page-link"

  nextclassName="page-item"
  nextLinkclassName="page-link"

  activeclassName="active"

  previousLabel="Prev"
  nextLabel="Next"

  forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
  onPageChange={(data) => {
    setPageNumber(data.selected + 1);
  }}
  pageCount={info?.pages}
/>
}

export default Pagination
