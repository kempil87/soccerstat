import React, {useEffect, useState} from "react";
import {api} from "../../base/axios";
import "./Home.css"
import {Spinner} from "react-bootstrap";
import 'material-icons/iconfont/material-icons.css';
import Pagination from "../../components/Pagination/Pagination";


export const HomePage = () => {
    const [competitions, setCompetitions] = useState([]);
    const [loader, setLoader] = useState(true);
    const [searchWord, setSearchWord] = useState("")


    const getCompetitions = () => {
        setLoader(true)

        api.get("/competitions").then((res) => {
            const arr = res.data.competitions.filter(item => item.plan === "TIER_ONE")
            const arr2 = res.data.competitions.filter(item => item.plan !== "TIER_ONE")
                setCompetitions(arr.concat(arr2))
                setLoader(false)
            }
        )
    }


    const getSearchWord = (e) => {
        e.preventDefault()
        const name = e.target.value

        setSearchWord(name.toLowerCase())
    }


    useEffect(() => {
        getCompetitions()
    }, []);

    return (
        <div>

            {loader ? (
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <Spinner  animation="border" variant="success"/>
                </div>
            ) : (
                <>
                    <h3 className="home-title mt-3">Все Лиги</h3>
                    <div className="mt-3 position-relative">
                        <span className="material-icons-outlined search">search</span>
                        <input
                            className="input-search"
                            placeholder="Поиск"
                            type="text"
                            onChange={(e) => getSearchWord(e)}
                        />
                    </div>

                    <div>
                        <Pagination
                            itemsPerPage={16}
                            data={searchWord.length > 0
                                ? competitions.filter(item => item.name.toLowerCase().includes(searchWord))
                                : competitions
                            }
                            cardType={"competitions"}
                        />
                    </div>
                </>
            )}
        </div>
    )

}
