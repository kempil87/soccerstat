import React from 'react';
import {Link} from "react-router-dom";

const Breadcrumbs = ({first,name,type}) => {

    return (
        <div>
            <div className="d-flex mt-3">
                {type === "team" && (
                    <>
                        <Link  className="home-title-link" to={"/club"} >{first}</Link>
                        <div  className="home-title" style={{marginLeft:12}}>
                            / {name}
                        </div>
                    </>
                )}
                {type === "competition" && (
                    <>
                        <Link  to={"/"}  className="home-title-link" >{first}</Link>
                        <div className="home-title" style={{marginLeft:12}}>
                            / {name}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Breadcrumbs;
