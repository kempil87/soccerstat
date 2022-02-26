import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {api} from "../../base/axios";
import "./Team.css"
import moment from "moment";
import {Spinner} from "react-bootstrap";
import Pagination from "../../components/Pagination/Pagination";
import DatePicker from "react-datepicker";


export const Team = () => {
    const {id} = useParams();
    const [matches, setMatches] = useState([]);
    const [loader, setLoader] = useState(true);
    const [startDate, setStartDate] = useState(new Date().setMonth(new Date().getMonth() - 12));
    const [endDate, setEndDate] = useState(new Date());

    const getTeam = () => {
        setLoader(true)
        const sD = moment(startDate).format("YYYY-MM-DD")
        const eD = moment(endDate).format("YYYY-MM-DD")

        api.get(`/teams/${id}/matches?dateFrom=${sD}&dateTo=${eD}`).then((res) => {
                setMatches(res.data.matches)
                setLoader(false)
            }
        )
    }
    const changeSelect = (date,type) => {
        if (type === "start"){
            setStartDate(date)
        } else {
            setEndDate(date)
        }
        getTeam()
    }


    useEffect(() => {
        getTeam()
    }, []);

    return (
        <div className={'row'}>
            <div className={"home-tittle"}>
                Календарь клуба
            </div>
            {loader ? (
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <Spinner animation="border" variant="success"/>
                </div>
            ) : (
                <>
                    <div className="col-6 d-flex justify-content-between">
                        <div className="d-flex justify-content-between align-content-center">
                            <h6>С</h6>
                            <DatePicker selected={startDate} onChange={(date) => changeSelect(date, "start")} />
                        </div>
                        <h6>По</h6>
                        <DatePicker selected={endDate} onChange={(date) => changeSelect(date, "end")} />
                    </div>
                    <Pagination itemsPerPage={12} data={matches} cardType={"matches"}/>
                </>
            )}

            {/*{matches.map((item) => (*/}
            {/*    <div className=" mt-4 col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>*/}
            {/*        <div className="game-card">*/}
            {/*            <div>*/}
            {/*                {`${item.awayTeam.name} - ${item.homeTeam.name}`}*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                {moment().format() > item.utcDate ? (*/}
            {/*                    <div  className="score">*/}
            {/*                        {getScore(item.score).awayScore} : {getScore(item.score).homeScore}*/}
            {/*                    </div>*/}
            {/*                ) : (*/}
            {/*                    <div  className="score" >*/}
            {/*                        Не сыграно*/}
            {/*                    </div>*/}
            {/*                )*/}
            {/*                }*/}
            {/*            </div>*/}
            {/*            <div className="utc-date">*/}
            {/*                {moment(item.utcDate).format("DD.MM.YYYY - HH:mm")}*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*))}*/}
        </div>
    )
}
