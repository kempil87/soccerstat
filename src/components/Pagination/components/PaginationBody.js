import React, {Fragment} from 'react';
import {CompetitionsCard} from "../../Card/competitions/CompetitionsCard";
import TeamCard from "../../Card/teams/TeamCard";
import MatchCard from "../../Card/matches/MatchCard";

export const PaginationBody = ({data, currentItems, cardType}) => {
    return (
        <div className="row" >
            {currentItems &&
            currentItems.map((item, index) => (
                <Fragment key={item.id}>
                    {cardType === "competitions" && (
                        <CompetitionsCard id={item.id}
                                          name={item.name}
                                          country={item.area.name}
                                          image={item.area.ensignUrl}
                                          plan={item.plan}/>
                    )}
                    {cardType === "teams" && (
                        <TeamCard id={item.id}
                                  image={item.crestUrl}
                                  name={item.name}/>
                    )}
                    {cardType === "matches" && (
                        <MatchCard
                            date={item.utcDate}
                            status={item.status}
                            hName={item.homeTeam.name}
                            aName={item.awayTeam.name}
                            score={item.score}
                            index={index}
                        />
                    )}
                </Fragment>
            ))}
        </div>
    );
};
