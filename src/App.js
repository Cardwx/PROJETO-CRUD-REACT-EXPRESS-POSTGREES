import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddEmpresa from "./components/add-empresa.component";
import Empresa from "./components/empresa.component";
import TutorialsList from "./components/empresas-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/empresas"} className="navbar-brand">
            
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/empresas"} className="nav-link">
                Empresas Cadastradas
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Adicionar uma nova Empresa
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/empresas"]} component={TutorialsList} />
            <Route exact path="/add" component={AddEmpresa} />
            <Route path="/empresas/:id" component={Empresa} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
