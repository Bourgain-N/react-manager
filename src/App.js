import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import NewTeamForm from "./components/NewTeamForm";
import Teams from "./components/Teams";
import TeamsContext from "./context/teamsContext";
import NewPlayersFrom from "./components/NewPlayersForm";
import Players from "./components/Players";

function App() {

  const [teams, setTeams] = useState(JSON.parse(localStorage.getItem("teams"))||[]);
  console.log(teams);
  useEffect(()=> {
    localStorage.setItem("teams",JSON.stringify(teams));

  }, [teams]) 


  return (

    <TeamsContext.Provider value={{ teams, setTeams }}>
      <Header />
      <NewTeamForm />
      <Teams teams={teams} />
      {teams[0]&&(
        <>
          <NewPlayersFrom />
        </>
      )}
    </TeamsContext.Provider>

  );
}

export default App;
