import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {api} from "../../base/axios";
import "./Team.css"
import moment from "moment";
import {OverlayTrigger, Spinner, Tooltip} from "react-bootstrap";
import Pagination from "../../components/Pagination/Pagination";
import DatePicker from "react-datepicker";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import {teamNameHelper} from "../../helpers/teamNameHelper";
import ru from "date-fns/locale/ru";


export const Team = () => {
    const {id} = useParams();
    const {search} = useLocation()
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
    const changeSelect = (date, type) => {
        if (type === "start") {
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
            {loader ? (
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <Spinner animation="border" variant="success"/>
                </div>
            ) : (
                <>
                    <div>
                        <Breadcrumbs first={"Команды"} name={teamNameHelper(search)} type={"team"}/>
                    </div>
                    <div className="mt-2 col-6 d-flex picker date-picker ">
                        <h6 className="mt-1">С</h6>
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Выберите оба временных селектора</Tooltip>
                            }>
                            <div className="d-flex justify-content-between align-content-center date-picker">

                                <DatePicker locale={ru}  selected={startDate} onChange={(date) => changeSelect(date, "start")}/>
                            </div>
                        </OverlayTrigger>
                        <h6 className="mt-1">По</h6>
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Выберите оба временных селектора</Tooltip>
                            }>
                            <div className="d-flex justify-content-between align-content-center date-picker">
                                <DatePicker locale={ru}  selected={endDate} onChange={(date) => changeSelect(date, "end")}/>
                            </div>
                        </OverlayTrigger>
                    </div>

                    <Pagination itemsPerPage={12} data={matches} cardType={"matches"}/>
                </>
            )}
        </div>
    )
}
