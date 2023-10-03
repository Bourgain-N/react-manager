import { useContext } from "react";
import TeamsContext from "../context/teamsContext";
import PlayerContext from "../context/playerContext";

function Players({id}) {
    const{teams} = useContext(TeamsContext);
    const {setPlayerId} = useContext(PlayerContext);
    return (
        <div className="container">
        <h2>Joueurs de l'équipe {teams[id].name}</h2>
        <ul>
          {teams[id].players.map((player, index) => (
            <li key={player.id}>
              <span>Nom:</span> {player.name} <br />
              <span>Age:</span> {player.age} <br />
              <span>Poste:</span> {player.position}
            </li>
          ))}
        </ul>
      </div>
    );
  }





export default Players;