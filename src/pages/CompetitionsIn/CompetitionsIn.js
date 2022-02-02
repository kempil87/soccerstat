import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {api} from "../../base/axios";
import "./Competitions.css"
import {Table} from "react-bootstrap";


export const CompetitionsIn = () => {
    const {id} = useParams();
    const [teams, setTeams] = useState([]);
    const [table, setTable] = useState([]);

    const getTeams = () => {
        api.get(`/competitions/${id}/teams`).then((res) => {
                setTeams(res.data.teams)
            }
        )
    }

    const getStandings = () => {
        api.get(`/competitions/${id}/standings`).then((res) => {
                setTable(res.data.standings[0].table)
            console.log(res)

            }
        )
    }

    useEffect(() => {
        getTeams()
        getStandings()
    }, []);


    return (
        <div className="row">
            <div className={"teams-tittle"}>Soccer Clubs</div>
            {teams.map((item) => (
                <div className={"mt-4 col-3"}>
                    <div key={item.id} className={""} >
                        <div className="item-teams" >
                            <img className="logo-teams " style={{marginRight:15,fontFamily:'Quicksand',textDecoration:"none"}} src={item.crestUrl} alt="logo-club"/>
                            <Link to={`/team/${item.id}`}>
                                {item.name}
                            </Link>
                        </div>
                    </div>
                </div>

            ))}


            {table.length > 0 && (
                <Table className="mt-4 " striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th className="logo-table">ЛКоманда</th>
                        <th className={"two-logo-table"}>Команда</th>
                        <th>И</th>
                        <th>В</th>
                        <th>П</th>
                        <th>Н</th>
                        <th>ЗМ</th>
                        <th>ПМ</th>
                        <th>О</th>
                    </tr>
                    </thead>
                    <tbody>
                    {table.map((item, index) => (
                        <tr key={index}>
                            <th>{item.position}</th>
                            <th>
                                <img className={"logo-teams-table"} src={item.team.crestUrl}/>
                            </th>
                            <th>{item.team.name}</th>
                            <th>{item.playedGames}</th>
                            <th>{item.won}</th>
                            <th>{item.lost}</th>
                            <th>{item.draw}</th>
                            <th>{item.goalsFor}</th>
                            <th>{item.goalsAgainst}</th>
                            <th>{item.points}</th>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            )}

        </div>
    )

}
