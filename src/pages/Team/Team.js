import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {api} from "../../base/axios";

export const Team = () =>{
    const {id} = useParams();
    const [matches, setMatches] = useState([]);

    const getTeam = () => {
        api.get(`/teams/${id}/matches/`).then((res) => {
                setMatches(res.data.matches)
            }
        )
    }

    const getScore = (score) =>{
        const homeScore = score.extraTime.homeTeam + score.halfTime.homeTeam + score.fullTime.homeTeam + score.penalties.homeTeam
        const awayScore = score.extraTime.awayTeam + score.halfTime.awayTeam + score.fullTime.awayTeam + score.penalties.awayTeam

        return {homeScore, awayScore}
    }

    useEffect(() => {
        getTeam()
    }, []);


    return(
        <div className={'row'}>
            {matches.map((item) =>(
                <div className={'col-3 mt-4'} key={item.id}>
                    <div>
                        {`${item.awayTeam.name} - ${item.homeTeam.name}`}
                    </div>
                    <div>
                        {getScore(item.score).awayScore} - {getScore(item.score).homeScore}
                    </div>
                </div>
            ))}
        </div>

    )

}
