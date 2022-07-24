import React, { Component } from "react";
import EmpresaDataService from "../services/empresa.service";


export default class EmpresasList extends Component {
  
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveEmpresas = this.retrieveEmpresas.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveEmpresa = this.setActiveEmpresa.bind(this);
    this.removeAllEmpresas = this.removeAllEmpresas.bind(this);
    this.searchName = this.searchName.bind(this);


    this.state = {
      empresas: [],
      currentEmpresa: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveEmpresas();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveEmpresas() {
    EmpresaDataService.getAll()
      .then(response => {
        this.setState({
          empresas: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveEmpresas();
    this.setState({
      currentEmpresa: null,
      currentIndex: -1
    });
  }

  setActiveEmpresa(empresa, index) {
    this.setState({
      currentEmpresa: empresa,
      currentIndex: index
    });
  }

  removeAllEmpresas() {
    EmpresaDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName() {
    this.setState({
      currentEmpresa: null,
      currentIndex: -1
    });

    EmpresaDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          empresas: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchName, empresas, currentEmpresa, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Procurar pelo nome da empresa"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Procurar
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>empresas List</h4>

          <ul className="list-group">
            {empresas &&
              empresas.map((empresa, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveEmpresa(empresa, index)}
                  key={index}
                >
                  {empresa.manufacturer_name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllEmpresas}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentEmpresa ? (
            <div>
              <h4>Empresa</h4>
              <div>
                <label>
                  <strong>Nome da empresa:</strong>
                </label>{" "}
                {currentEmpresa.manufacturer_name}
              </div>
              
              <div>
                <label>
                  <strong>CNPJ:</strong>
                </label>{" "}
                {currentEmpresa.manufacturer_cnpj}
              </div>
              <div>
                <label>
                  <strong>Nome Fantasia:</strong>
                </label>{" "}
                {currentEmpresa.manufacturer_fantasy_name}
              </div>
              <div>
                <label>
                  <strong>Nome Social:</strong>
                </label>{" "}
                {currentEmpresa.manufacturer_social_name}
              </div>
              <div>
                <label>
                  <strong>Empresa Ativa:</strong>
                </label>{" "}
                {currentEmpresa.manufacturer_active}
              </div>
              <div>
                <label>
                  <strong>Site:</strong>
                </label>{" "}
                {currentEmpresa.manufacturer_site}
              </div>
              <div>
                <label>
                  <strong>País:</strong>
                </label>{" "}
                {currentEmpresa.manufacturer_country}
              </div>
              <div>
                <label>
                  <strong>Cidade:</strong>
                </label>{" "}
                {currentEmpresa.manufacturer_city}
              </div>
              <div>
                <label>
                  <strong>Bairro:</strong>
                </label>{" "}
                {currentEmpresa.manufacturer_bairro}
              </div>

              
            </div>
          ) : (
            <div>
              <br />
       
            </div>
          )}
        </div>
      </div>
    );
  }
}