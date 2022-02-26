import React from 'react';
import {Link} from "react-router-dom";
import "./TeamCard.css"

const ball = "data:image/jpeg;base64,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"


const TeamCard = ({name,image,id}) => {
    return (
            <div className="mt-4 col-6 col-sm-4 col-md-3">
                <div>
                    <div className=" d-flex flex-column flex-xl-row" style={{fontWeight: "bolder"}}>
                        <img className="logo-teams "
                             style={{marginRight: 15, fontFamily: 'Quicksand', textDecoration: "none"}}
                             src={image || ball} alt="logo-club"/>
                        <Link to={`/team/${id}`} className="link">
                            {name}
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default TeamCard;
