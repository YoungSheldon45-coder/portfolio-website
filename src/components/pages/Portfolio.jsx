import React, { useState } from 'react'
import { portfolio } from '../data/dummydata'
import { Visibility } from '@mui/icons-material'
import Heading from '../common/Heading'

const allCategory = ['all', ...new Set(portfolio.map((item) => item.category))]
const itemsPerPage = 6

const Portfolio = () => {
    const [list, setList] = useState(portfolio)
    const [category, setCategory] = useState(allCategory)
    const [currentPage, setCurrentPage] = useState(1)

    const filterItems = (category) => {
        const newItems = portfolio.filter((item) => item.category === category)
        setList(category === 'all' ? portfolio : newItems)
        setCurrentPage(1)  // Reset to the first page when filtering
    }

    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem)

    // Calculate total pages
    const totalPages = Math.ceil(list.length / itemsPerPage)

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
    }

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
    }

    return (
        <>
            <article>
                <div className="container">
                    <Heading title='Portfolio' />
                    <div className="catButton">
                        {category.map((category) => (
                            <button 
                                key={category} 
                                className='primaryBtn' 
                                onClick={() => filterItems(category)} 
                                data-aos="zoom-out-down"
                                data-aos-easing="linear"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="content grid3 portfolio-div">
                        {currentItems.map((item) => (
                            <a href={item.url} target='_blank' rel="noopener noreferrer" key={item.name} className='portfolio-link'>
                                <h3 className='card-titles'>{item.name}</h3>
                                <div className="box" data-aos="fade-up" data-aos-easing="linear">
                                    <div className="img">
                                        <img src={item.cover} alt="item" />
                                    </div>
                                    <div className="overlay">
                                        <h3>{item.title}</h3>
                                        <span>{item.name}</span>
                                        <Visibility />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="pagination">
                        <button className='pagination-button' onClick={handlePreviousPage} disabled={currentPage === 1}>
                            <p>Previous</p>
                        </button>
                        <p>Page {currentPage} of {totalPages}</p>
                        <button className='pagination-button' onClick={handleNextPage} disabled={currentPage === totalPages}>
                            <p>Next</p>
                        </button>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Portfolio
