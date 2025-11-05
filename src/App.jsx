// src/App.jsx
import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(
    [
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]
  );
// When you click Add on a character, this function should add the selected character’s object to the existing team state array. This is how you build your team.
const handleAddFighter = (fighter) => {
  if(money > fighter.price){
     setMoney(money - fighter.price)
  }else{
    console.log("Not Enough Money")
    return
  }
 
  setTeam([...team, fighter]);
  // filters the zombie array for everything but the added team zombie
  setZombieFighters(zombieFighters.filter((fighters) => fighters !== fighter));
};


const handleRemoveFighter = (fighter) => {
  setTeam(team.filter((fighters) => fighters !== fighter));
  setZombieFighters([...zombieFighters,fighter])
  setMoney(money + fighter.price)
}

  return (
    <>
    <main>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {team.reduce((acc,fighters)=> acc + fighters.strength,0)} </h2>
      <h2>Team Agility: {team.reduce((acc,fighters)=> acc + fighters.agility,0)} </h2>
      <h2>Team:</h2>
      <div className="teamList">
        {team.length === 0
          ? <p>Pick some team members!</p>
          : team.map((fighter, index) => {
              return (
                <li key={index}>
                  <img src={fighter.img} />
                  <h3>Name: {fighter.name}</h3>
                  <p>Price: {fighter.price}</p>
                  <p>Strength: {fighter.strength}</p>
                  <p>Agility: {fighter.agility}</p>
                  <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
                </li>
              );
            })}
      </div>
</main>
  <section>
    <h2 className="fighterListh2">Fighters</h2>
      <div className="fighterList">
        {zombieFighters.map((fighter, index) => {
          return (
            <li key={index}>
              <img src={fighter.img} />
              <h3>Name: {fighter.name}</h3>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          );
        })}
      </div>
      </section> 
    </>
  );
};

export default App;
