import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {api} from "../../base/axios";
import "./Competitions.css"
import {OverlayTrigger, Spinner, Tooltip} from "react-bootstrap";
import Pagination from "../../components/Pagination/Pagination";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ru from 'date-fns/locale/ru';


export const CompetitionsIn = () => {
    const {id} = useParams();
    const [loader, setLoader] = useState(true);
    const [matches, setMatches] = useState([])
    const [startDate, setStartDate] = useState(new Date().setMonth(new Date().getMonth() - 6));
    const [endDate, setEndDate] = useState(new Date());
    const [competitionName, setCompetitionName] = useState("");


    const getMatches = () => {
        const sD = moment(startDate).format("YYYY-MM-DD")
        const eD = moment(endDate).format("YYYY-MM-DD")
        setLoader(true)
        api.get(`/competitions/${id}/matches?dateFrom=${sD}&dateTo=${eD}`).then((res) => {
                setMatches(res.data.matches)
                setCompetitionName(res.data.competition.name)
                setLoader(false)
            }
        )
    }
    const changeSelect = (date, type) => {
        if (type === "start") {
            if (date < endDate) {
                setStartDate(date)
                getMatches()
            }
        } else {
            if (date > startDate) {
                setEndDate(date)
                getMatches()
            }
        }
    }

    useEffect(() => {
        getMatches()
    }, []);

    return (
        <div>

            {loader ? (
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <Spinner animation="border" variant="success"/>
                </div>
            ) : (
                <>
                    <div>
                        <Breadcrumbs first={"Лиги"} name={competitionName} type={"competition"}/>
                    </div>
                    <div className="col-6 d-flex mt-2 date-picker picker">
                        <h6 className="mt-1" style={{fontFamily: "Quicksand ,sans-serif"}}>С</h6>
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Выберите оба временных селектора</Tooltip>
                            }>
                            <div style={{fontFamily: "Quicksand ,sans-serif"}}
                                 className="d-flex justify-content-between align-content-center date-picker">
                                <DatePicker locale={ru} selected={startDate} onChange={(date) => changeSelect(date, "start")}/>
                            </div>
                        </OverlayTrigger>

                        <h6 className="mt-1" style={{fontFamily: "Quicksand ,sans-serif"}}>По</h6>
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Выберите оба временных селектора</Tooltip>
                            }>
                            <div style={{fontFamily: "Quicksand ,sans-serif"}}
                                 className="d-flex justify-content-between align-content-center date-picker">
                                <DatePicker locale={ru}  selected={endDate} onChange={(date) => changeSelect(date, "end")}/>
                            </div>
                        </OverlayTrigger>
                    </div>

                    <div className="mt-4">
                        <Pagination itemsPerPage={20} data={matches} cardType={"matches"}/>
                    </div>
                </>
            )}
        </div>
    )
}
