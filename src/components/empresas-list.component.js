import React, { Component } from "react";
import EmpresaDataService from "../services/empresa.service";
import { Link } from "react-router-dom";

export default class EmpresasList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveEmpresas = this.retrieveEmpresas.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveEmpresa = this.setActiveEmpresa.bind(this);
    this.removeAllEmpresas = this.removeAllEmpresas.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      empresas: [],
      currentEmpresa: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveEmpresas();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
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

  searchTitle() {
    this.setState({
      currentEmpresa: null,
      currentIndex: -1
    });

    EmpresaDataService.findByTitle(this.state.searchTitle)
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
    const { searchTitle, empresas, currentEmpresa, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
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
                  {empresa.title}
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
              <h4>empresa</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentEmpresa.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentEmpresa.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentEmpresa.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/empresas/" + currentEmpresa.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a empresa...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}