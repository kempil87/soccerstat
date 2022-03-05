import React from 'react';
import moment from "moment";
import "./MatchCard.css"
import {getLocaleTime} from "../../../helpers/getLocaleTime";

const MatchCard = ({date, status, hName, aName, score, index}) => {
    return (
        <div style={{
            borderTopWidth: index === 0 ? 1 : 0,
            borderTopColor: "black",
            borderStyle: 'solid'
        }}
             className="d-flex justify-content-between container matchCard "
        >
            <div className="col-2 match-date">{getLocaleTime(date)}</div>
            <div
                className="col-1 match-status d-none d-md-flex">{status === "FINISHED" ? "Завершен" : "Запланирован"}</div>
            <div className="col-1 match-status d-flex d-md-none">{status === "FINISHED" ?
                <span className="material-icons-outlined icon-time">done</span>
                :
                <span className="material-icons-outlined icon-time-clock">schedule</span>
            }
            </div>
            <div className="col-4 match-Name-Team">{hName} - {aName}</div>
            <div className="col-2 d-flex ">
                {status === "FINISHED" ? (
                    <>
                        <h5 className="result">
                            {score.fullTime.homeTeam}: {score.fullTime.awayTeam}
                        </h5>
                        {score.extraTime.homeTeam !== null && (
                            <span>({score.extraTime.homeTeam}) : ({score.extraTime.awayTeam})</span>
                        )}
                        {score.penalties.homeTeam !== null && (
                            <span>({score.penalties.homeTeam}) : ({score.penalties.awayTeam})</span>
                        )}
                    </>
                ) : (
                    <h5 className="result">- : -</h5>
                )}
            </div>
        </div>
    );
};

export default MatchCard;


