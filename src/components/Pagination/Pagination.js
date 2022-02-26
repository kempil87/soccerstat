import React, {useEffect, useState} from 'react';
import "./Pagination.css"
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";
import {CompetitionsCard} from "../Card/competitions/CompetitionsCard";
import TeamCard from "../Card/teams/TeamCard";
import MatchCard from "../Card/matches/MatchCard";

const Pagination = ({itemsPerPage, data, cardType}) => {

    const items = data;

    function Items({data, currentItems}) {
        return (
            <div className="row" >
                {currentItems &&
                currentItems.map((item) => (
                    <>
                        {cardType === "competitions" && (
                            <CompetitionsCard id={item.id} name={item.name} country={item.area.name}
                                              image={item.area.ensignUrl} plan={item.plan}/>

                        )}
                        {cardType === "teams" && (
                            <TeamCard id={item.id} image={item.crestUrl} name={item.name}/>
                        )}
                        {cardType === "matches" && (
                            <MatchCard
                                date={item.utcDate}
                                status={item.status}
                                hName={item.homeTeam.name}
                                aName={item.awayTeam.name}
                                score={item.score}
                            />
                        )}
                    </>
                ))}
            </div>
        );
    }

    function PaginatedItems({itemsPerPage}) {
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {

            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(items.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(items.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);

        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % items.length;
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items data={data} currentItems={currentItems}/>
                <div>
                    <ReactPaginate className="paginate"
                                   breakLabel="..."
                                   nextLabel="След"
                                   onPageChange={handlePageClick}
                                   pageRangeDisplayed={5}
                                   pageCount={pageCount}
                                   previousLabel="Пред"
                                   renderOnZeroPageCount={null}
                    />
                </div>
            </>
        );
    }

    return <PaginatedItems itemsPerPage={itemsPerPage}/>
}

export default Pagination
