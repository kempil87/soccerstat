import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {api} from "../../base/axios";
import "./Competitions.css"
import {Spinner} from "react-bootstrap";
import Pagination from "../../components/Pagination/Pagination";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export const CompetitionsIn = () => {
    const {id} = useParams();
    const [loader, setLoader] = useState(true);
    const [matches,setMatches] = useState([])
    const [startDate, setStartDate] = useState(new Date().setFullYear(new Date().getFullYear() - 1));
    const [endDate, setEndDate] = useState(new Date());

    const getMatches = () =>{
        const sD = moment(startDate).format("YYYY-MM-DD")
        const eD = moment(endDate).format("YYYY-MM-DD")
        setLoader(true)
            api.get(`/competitions/${id}/matches?dateFrom=${sD}&dateTo=${eD}`).then((res) => {
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
      getMatches()
    }

    useEffect(() => {
        getMatches()
    }, []);

    return (
        <div className="">
            <div className="home-tittle mb-3">Нав.Цепочка > Лига "такая то"</div>
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

                        <div className="mt-4">
                            <Pagination itemsPerPage={10} data={matches} cardType={"matches"}/>
                        </div>
                    </>
            )}
        </div>
    )
}
