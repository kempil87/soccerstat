import React, {Fragment, useEffect, useState} from 'react';
import "./Pagination.css"
import ReactPaginate from "react-paginate";
import {PaginationBody} from "./components/PaginationBody";

const Pagination = ({itemsPerPage, data, cardType}) => {
    const items = data;

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            {data.length === 0 && (
                <h4 className="mt-3">Упс...Ничего не найдено &#128549;</h4>
            )}

            <PaginationBody currentItems={currentItems} cardType={cardType} data={data}/>

            <div className="col-12 flex-column d-none d-sm-flex">
                <ReactPaginate className="paginate d-flex flex-row flex-fill"
                               breakLabel="..."
                               nextLabel="Вперед"
                               onPageChange={handlePageClick}
                               pageRangeDisplayed={5}
                               pageCount={pageCount}
                               previousLabel="Назад"
                               renderOnZeroPageCount={null}
                               activeClassName={'active-pag'}
                />
            </div>
            <div className="col-12 flex-column d-flex d-sm-none">
                <ReactPaginate className="paginate d-flex flex-row flex-fill"
                               breakLabel="..."
                               nextLabel=">"
                               onPageChange={handlePageClick}
                               pageRangeDisplayed={4}
                               pageCount={pageCount}
                               previousLabel="<"
                               renderOnZeroPageCount={null}
                               activeClassName={'active-pag'}
                />
            </div>
        </>
    );


}

export default Pagination
