import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from "./components/dashboard.js"



import Cardd from "./components/card"


  


export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/about">
            <About  />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
    </Router>
  );
}

function Home() {
    return <h2>Home</h2>;
  }
  
function About() {
    var locaisArray = [{
        nome: "Samuel Lanches",
        endereco: "Rua. Não sei, N°3",
        categoria: "lanchonete",
        capacidade: 15,
        qnt_atual: 2,
        photo_url: ""
      },
      {
        nome: "Baladão do Gustavinho",
        endereco: "Av. vamo lá, N°7",
        categoria: "balada",
        capacidade: 50,
        qnt_atual: 23,
        photo_url: ""
      },
      {
        nome: "Kukiel's Bar",
        endereco: "Av. quero, N°7",
        categoria: "bar",
        capacidade: 10,
        qnt_atual: 4,
        photo_url: ""
      },
      {
        nome: "Lanchão da Ji",
        endereco: "Av. Vamo lá, N°10",
        categoria: "lanchonete",
        capacidade: 20,
        qnt_atual: 5,
        photo_url: ""
      },
      ]
    return (
        <div style={{width:"100%"}}>
            <h1> Alo!</h1>
            <div style={{display:"flex", justifyContent:"space-around", width:"100%"}}>
            {locaisArray.map((local)=>(
                <Cardd {...local}> </Cardd>
            ))}
            </div>
        </div>
    );
}
  
function Users() {
    return <h2>Users</h2>;
}