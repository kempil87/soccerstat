import React, {useEffect, useState} from 'react';
import {api} from "../../base/axios";
import {Spinner} from "react-bootstrap";
import Pagination from "../../components/Pagination/Pagination";

const Teams = () => {
    const [teams, setTeams] = useState([]);
    const [loader, setLoader] = useState(true);
    const [searchWord, setSearchWord] = useState("")

    const getTeams = () => {
        setLoader(true)
        api.get(`/teams`).then((res) => {
                setTeams(res.data.teams)
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

                    <h3 className="home-title mt-3">Все Команды</h3>

                    <div className="  mt-3 position-relative">
                        <span className="material-icons-outlined search">search</span>
                        <input
                            className="input-search"
                            placeholder="Поиск"
                            type="text"
                            onChange={(e) => getSearchWord(e)}
                        />
                    </div>
                    <Pagination
                        itemsPerPage={12}
                        data={
                            searchWord.length > 0
                                ? teams.filter(item => item.name.toLowerCase().includes(searchWord))
                                : teams
                        }
                        cardType={"teams"}
                    />
                </>
            )}
        </div>
    );
};

export default Teams;
