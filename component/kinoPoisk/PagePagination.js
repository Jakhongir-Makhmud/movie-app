import React from 'react'
import { connect } from 'react-redux';

function PagePagination({ page, totalPages, pageController }) {

    const pageInt = parseInt(page);
    const lastPage = parseInt(totalPages);



    return (
        <div className='pagination'>
            {pageInt === 1 ? null : <button className='prev' onClick={() => pageController(pageInt - 1)} >Prev</button>}

            {pageInt > 6 ? <button onClick={() => pageController(1)}>1</button> : null}

            {pageInt > 5 ? <button>...</button> : null}

            {pageInt > 2 ? <button onClick={() => pageController(pageInt - 2)}>{pageInt - 2}</button> : null}
            {pageInt > 1 ? <button onClick={() => pageController(pageInt - 1)}>{pageInt - 1}</button> : null}
            <button className='currentPage'>{pageInt}</button>
            {pageInt < (lastPage) ? <button onClick={() => pageController(pageInt + 1)}>{pageInt + 1}</button> : null}
            {pageInt < (lastPage - 1) ? <button onClick={() => pageController(pageInt + 2)}>{pageInt + 2}</button> : null}

            {lastPage > 5 && pageInt < (lastPage - 3) ? <button>...</button> : null}

            {pageInt < (lastPage - 4) ? <button onClick={() => pageController(lastPage)} >{lastPage}</button> : null}

            {pageInt === parseInt(lastPage) ? null : <button className='next' onClick={() => pageController(pageInt + 1)}>next</button>}
        </div>
    )
}


const stateToProp = state => ({
    page: state.data.page,
    totalPages: state.data.pages,
})

export default connect(stateToProp)(PagePagination)
