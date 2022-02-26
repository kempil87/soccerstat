import React, {useEffect, useState} from 'react';
import {api} from "../../base/axios";
import {Spinner} from "react-bootstrap";
import Pagination from "../../components/Pagination/Pagination";

const Clubs = () => {

    const [teams, setTeams] = useState([]);
    const [loader, setLoader] = useState(true);

    const getTeams = () => {
        setLoader(true)
        api.get(`/teams`).then((res) => {
                setTeams(res.data.teams)
            console.log(res)
            setLoader(false)
            }
        )
    }


    useEffect(() => {
        getTeams()
    }, []);


    return (
        <div>
            {loader ? (
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <Spinner animation="border" variant="success"/>
                </div>
            ) : (
                <>
                    <Pagination itemsPerPage={12} data={teams} cardType={"teams"}/>
                </>
            )}
        </div>
    );
};

export default Clubs;
