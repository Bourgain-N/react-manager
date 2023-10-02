import { useContext } from "react";
import TeamsContext from "../context/teamsContext";

function Teams({ teams }) {

    const {setDisplayTeam} = useContext(TeamsContext);


    return (
        <>
            <ul>
                {teams.map((team, id) => (
                    <>
                        <li onClick={()=>setDisplayTeam(id)}>
                            - Team Name : {team.name}
                        </li>
                        <li>
                            - Team Color : {team.color}
                        </li>
                        
                    </>
                ))}
            </ul>
        </>
    );
};


export default Teams;