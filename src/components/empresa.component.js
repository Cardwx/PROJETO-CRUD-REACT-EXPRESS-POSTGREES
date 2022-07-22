import React, { Component } from "react";
import EmpresaDataService from "../services/empresa.service";

export default class Empresa extends Component {
  constructor(props) {
    super(props);
    this.onChangeCnpj = this.onChangeCnpj.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.getEmpresa = this.getEmpresa.bind(this);
    this.deleteEmpresa = this.deleteEmpresa.bind(this);

    this.state = {
      currentEmpresa: {
        manufacture_id: null,

        manufacturer_name: "",
        manufacturer_cnpj : "", 
        /*
        manufacturer_fantasy_name  : "",
        manufacturer_social_name  : "",
        manufacturer_active  : "",
        manufacturer_site  : "",
        manufacturer_country  : "",
        manufacturer_city  : "",
        manufacturer_bairro   : "",
        published: false,
        */
        submitted: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getEmpresa(this.props.match.params.id);
  }

  onChangeCnpj(e) {
    const manufacturer_cnpj = e.target.value;

    this.setState(function(prevState) {
      return {
        currentEmpresa: {
          ...prevState.currentEmpresa,
          manufacturer_cnpj: manufacturer_cnpj
        }
      };
    });
  }

  onChangeName(e) {
    const manufacturer_name = e.target.value;
    
    this.setState(prevState => ({
      currentEmpresa: {
        ...prevState.currentEmpresa,
        manufacturer_name: manufacturer_name
      }
    }));
  }

  getEmpresa(id) {
    EmpresaDataService.get(id)
      .then(response => {
        this.setState({
          currentEmpresa: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  /*
  updatePublished(status) {
    var data = {
      manufacture_id: this.state.manufacture_id,
      manufacturer_name: this.state.manufacturer_name,
      manufacturer_cnpj: this.state.manufacturer_cnpj,
      manufacturer_fantasy_name: this.state.manufacturer_fantasy_name,
      manufacturer_social_name: this.state.manufacturer_social_name,
      manufacturer_active: this.state.manufacturer_active,
      manufacturer_site: this.state.manufacturer_site,
      manufacturer_country: this.state.manufacturer_country,
      manufacturer_city: this.state.manufacturer_city,
      manufacturer_bairro: this.state.manufacturer_bairro,
      published: status
    };

    EmpresaDataService.update(this.state.currentEmpresa.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentEmpresa: {
            ...prevState.currentEmpresa,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateEmpresa() {
    EmpresaDataService.update(
      this.state.currentEmpresa.id,
      this.state.currentEmpresa
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "A empresa foi adicionado com sucesso! "
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
*//*
  deleteEmpresa() {    
    EmpresaDataService.delete(this.state.currentEmpresa.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/empresas')
      })
      .catch(e => {
        console.log(e);
      });
  }*/

  render() {
    const { currentEmpresa } = this.state;

    return (
      <div>
        {currentEmpresa ? (
          <div className="edit-form">
            <h4>Adicione as empresas:</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Nome Empresa</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentEmpresa.title}
                  onChange={this.onChangeCnpj}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentEmpresa.description}
                  onChange={this.onChangeName}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentEmpresa.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentEmpresa.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteEmpresa}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateEmpresa}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
           
          </div>
        )}
      </div>
    );
  }
}
