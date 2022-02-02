import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {api} from "../../base/axios";

export const Team = () =>{
    const {id} = useParams();
    // const [team, setTeam] = useState([]);
    //
    // const getTeam = () => {
    //     api.get(`/teams/${id}`).then((res) => {
    //             // setTeam(res.data.teams)
    //             console.log(res)
    //
    //         }
    //     )
    // }
    // useEffect(() => {
    //     getTeam()
    // }, []);





    return(
        <div>
            {id}
        </div>
    )

}
