import { useContext } from "react";
import TeamsContext from "../context/teamsContext";
import PageContext from "../context/pageContext";


function Teams() {
    const{teams, setTeamId, setTeams} = useContext(TeamsContext);
    const {setCurrentPage} = useContext(PageContext);
    const handleClick = (index) => {
        setTeamId(index);
        setCurrentPage('edit-team')
    }
    const handleDelete = (index) => {
        let newTeams = [...teams];
        newTeams.splice(index, 1);
        setTeams(newTeams);
      }
    return (
        <>
        <div className="container">
            <h2>Les équipes</h2>
            <ul>
            {teams.map((team, index) => (
            <li key={index}>
              <span>Nom de l'équipe:</span> {team.name} <br />
              <span>Couleur du maillot:</span> {team.color} <br />
              <button onClick={()=>handleClick(index)}>Modifier</button>
              <button onClick={()=>handleDelete(index)}>Supprimer</button>
            </li>
          ))}
            </ul>
            </div>
        </>
    );
};

export default Teams;