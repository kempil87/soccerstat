import React, {useEffect, useState} from "react";
import {api} from "../../base/axios";
import "./Home.css"
import {Breadcrumb, Spinner} from "react-bootstrap";
import 'material-icons/iconfont/material-icons.css';
import Pagination from "../../components/Pagination/Pagination";


export const HomePage = () => {
    const [competitions, setCompetitions] = useState([]);
    const [loader, setLoader] = useState(true);




    const getCompetitions = () => {
        setLoader(true)

        api.get("/competitions").then((res) => {
                setCompetitions(res.data.competitions)
                setLoader(false)

            }
        )
    }


    const getSort = (e) => {
        e.preventDefault()
        const name = e.target.value

        if (name.length === 0) {
            getCompetitions()
        }

        const result = competitions.filter(item => item.name.includes(name));
        if (result.length > 0) {
            setCompetitions(result)
        }
    }



    useEffect(() => {
        getCompetitions()
    }, []);


    return (
        <div>

            {/*<Modal show={modalShow} setShow={setModalShow}/>*/}
            {/*  <div className="home-title mt-3">Все лиги</div>*/}
            {/*<Breadcrumb className="mt-3 ">*/}
            {/*    <Breadcrumb.Item href="/">Лиги</Breadcrumb.Item>*/}
            {/*    <Breadcrumb.Item href="/">Лига-" "</Breadcrumb.Item>*/}
            {/*</Breadcrumb>*/}
            <div className="  mt-3 position-relative">
                <span className="material-icons-outlined search">
                        search
                </span>
                <input className="input-search" placeholder="Поиск" type="text" onChange={(e) => getSort(e)}/>
            </div>

            {loader ? (
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <Spinner animation="border" variant="success"/>
                </div>
            ) : (
                <>
                    <Pagination itemsPerPage={16} data={competitions} cardType={"competitions"}/>
                </>
            )}

        </div>
    )

}
