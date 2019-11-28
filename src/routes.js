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
      <Route path="/sobre">
        <Contato />
      </Route>
    </Switch>
  );
}

function Home() {
  const [request1, setRequest1] = React.useState([])
  const [request2, setRequest2] = React.useState([])


  axios.get("https://jiji-backend.herokuapp.com/api/locais").then(res => {
    setRequest1(res.data);
  })

  axios.get("https://jiji-backend.herokuapp.com/api/roles").then(res => {
    setRequest2(res.data);
  })

  return (
    <div>
      <h2>Home</h2>
      <div style={grid}>
        {request2 && request2.map((local) => (
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
      <div style={grid}>
        {request && request.map((local) => (
          (local.cat == cat && <Cardd {...local}> </Cardd>)
        ))}
      </div>
    </div>
  );
}
const grid = { display: "flex", justifyContent: "space-around", flex:"1", flexWrap: "wrap", width: "100%" }

const Locais = () => {
  let { cat } = useParams();
  const [request, setRequest] = React.useState([])


  axios.get("https://jiji-backend.herokuapp.com/api/locais").then(res => {
    setRequest(res.data);
  })

  return (
    <div style={{ width: "100%" }}>
      <h1> Lista de {cat} disponíveis</h1>
      <div style={{ display: "flex", justifyContent: "space-around", flex:"1", flexWrap: "wrap", width: "100%" }}>
        {request && request.map((local) => (
          (local.categoria == cat && <Cardd {...local}> </Cardd>)
        ))}
      </div>
    </div>
  );
}

const Contato = () => {
  return (
    <div style={{ width: "100%" }}>
      <h1> Oe, Tudo bem? </h1>
      <h3> Possui algum estabelecimento e gostaria de aparecer aqui? </h3>
      <p> Vamos conversar! Mande um email com o assunto "GIGI" para gabrielkukiel@gmail.com </p>
    </div>
  );
}