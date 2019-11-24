import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import axios from "axios"


import Dashboard from "./components/dashboard.js"
import Cardd from "./components/card"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/lugares/:cat">
        <Locais />
      </Route>
      <Route path="/roles/:cat">
        <Roles />
      </Route>
    </Switch>
  );
}

function Home() {
  const [request, setRequest] = React.useState([])


  axios.get("https://jiji-backend.herokuapp.com/api/locais").then(res => {
    setRequest(res.data);

  })
  return (
    <div>
      <h2>Home</h2>
      <div>
        {request && request.map((local) => (
          (<Cardd {...local}> </Cardd>)
        ))}
      </div>
    </div>
  )
}


const styleFlex = {
  width: "100%",
  display: "flex", 
  justifyContent: "space-around", 
  flexWrap: "wrap",
  flexDirection: "row",
  flexShrink: 0,

}

const Roles = () => {
  let { cat } = useParams();
  const [request, setRequest] = React.useState([])


  axios.get("https://jiji-backend.herokuapp.com/api/roles").then(res => {
    setRequest(res.data);
  })

  return (
    <div style={{ width: "100%" }}>
      <h1> Lista de roles em {cat}</h1>
      <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
        {request && request.map((local) => (
          (local.cat == cat && <Cardd {...local}> </Cardd>)
        ))}
      </div>
    </div>
  );
}

const Locais = () => {
  let { cat } = useParams();
  const [request, setRequest] = React.useState([])


  axios.get("https://jiji-backend.herokuapp.com/api/locais").then(res => {
    setRequest(res.data);
  })

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
    <div style={{ width: "100%" }}>
      <h1> Lista de {cat} disponíveis</h1>
      <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
        {request && request.map((local) => (
          (local.categoria == cat && <Cardd {...local}> </Cardd>)
        ))}
      </div>
    </div>
  );
}