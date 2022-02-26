import React from 'react';
import moment from "moment";
import "./MatchCard.css"


const MatchCard = ({date,status,hName,aName,score}) => {
    return (
        <div>
            <div  className="d-flex container matchCard">
                <div  className="col-3">{moment(date).format("DD.MM.YYYY - HH:mm")}</div>
                <div className="col-2">{status === "FINISHED" ? "Завершен" : "Запланирован"}</div>
                <div className="col-4">{hName} - {aName}</div>
                <div className="col-3 d-flex">
                    {status === "FINISHED" ? (
                        <>
                            <h5>
                                {score.fullTime.homeTeam}: {score.fullTime.awayTeam}
                            </h5>
                            {score.extraTime.homeTeam !== null &&(
                                <span>({score.extraTime.homeTeam}) : ({score.extraTime.awayTeam})</span>
                            )}
                            {score.penalties.homeTeam !== null &&(
                                <span>({score.penalties.homeTeam}) : ({score.penalties.awayTeam})</span>
                            )}
                        </>
                    ) : (
                        <h5>Нет Результата</h5>
                    )}

                </div>
            </div>
        </div>
    );
};

export default MatchCard;


