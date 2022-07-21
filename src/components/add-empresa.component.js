import React, { Component } from "react";
import EmpresaDataService from "../services/empresa.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeManufacturerName = this.onChangeManufacturerName.bind(this);
    this.onChangeManufacturerCnpj = this.onChangeManufacturerCnpj.bind(this);
    this.onChangeManufacturerFantasyName = this.onChangeManufacturerFantasyName.bind(this);
    this.onChangeManufacturerSocialName = this.onChangeManufacturerSocialName.bind(this);
    this.onChangeManufacturerActive = this.onChangeManufacturerActive.bind(this);
    this.onChangeManufacturerSite = this.onChangeManufacturerSite.bind(this);
    this.onChangeManufacturerCountry = this.onChangeManufacturerCountry.bind(this);
    this.onChangeManufacturerCity = this.onChangeManufacturerCity.bind(this);
    this.onChangeManufacturerBairro = this.onChangeManufacturerBairro.bind(this);
    this.saveEmpresa = this.saveEmpresa.bind(this);
    this.newEmpresa = this.newEmpresa.bind(this);

    this.state = {
      manufacture_id: null,
      manufacturer_name: "",
      manufacturer_cnpj : "", 
      manufacturer_fantasy_name  : "",
      manufacturer_social_name  : "",
      manufacturer_active  : "",
      manufacturer_site  : "",
      manufacturer_country  : "",
      manufacturer_city  : "",
      manufacturer_bairro   : "",
      published: false,

      submitted: false
    };
  }
// realiza alterações se necessário
// nome empresa
  onChangeManufacturerName(e) {
    this.setState({
      manufacturer_name: e.target.value,
    
    });
  }
    /*
      manufacturer_cnpj: e.target.value,
      manufacturer_fantasy_name: e.target.value,
      manufacturer_social_name: e.target.value,
      manufacturer_active: e.target.value,
      manufacturer_site: e.target.value,
      manufacturer_country: e.target.value,
      manufacturer_city: e.target.value,
      manufacturer_bairro: e.target.value*/

  // altera cnpj
  onChangeManufacturerCnpj(){
    this.setState({manufacturer_cnpj: e.target.value,});}

  // altera nome fantasia
  onChangeManufacturerFantasyName(){
    this.setState({manufacturer_fantasy_name: e.target.value,});}

  //altera nome social
  onChangeManufacturerSocialName(){
    this.setState({manufacturer_social_name: e.target.value,});}

    //altera se está ativa ou não
  onChangeManufacturerActive(){
    this.setState({manufacturer_active: e.target.value,});}

    //altera site
  onChangeManufacturerSite(){
    this.setState({manufacturer_site: e.target.value,});}
    //altera pais
  onChangeManufacturerCountry(){
    this.setState({manufacturer_country: e.target.value,});}
    //altera cidade
  onChangeManufacturerCity(){
    this.setState({manufacturer_city: e.target.value,});}
    //altera bairro
  onChangeManufacturerBairro(){
    this.setState({manufacturer_bairro: e.target.value,});}
   
  saveEmpresa() {
    var data = {
      /*title: this.state.title,
      description: this.state.description*/
      manufacturer_name: this.state.manufacturer_name,
      manufacturer_cnpj: this.state.manufacturer_cnpj,
      manufacturer_fantasy_name: this.state.manufacturer_fantasy_name,
      manufacturer_social_name: this.state.manufacturer_social_name,
      manufacturer_active: this.state.manufacturer_active,
      manufacturer_site: this.state.manufacturer_site,
      manufacturer_country: this.state.manufacturer_country,
      manufacturer_city: this.state.manufacturer_city,
      manufacturer_bairro: this.state.manufacturer_bairro,

    };

    EmpresaDataService.create(data)
      .then(response => {
        this.setState({
          /*
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,*/
          manufacturer_name: response.data.manufacturer_name,
          manufacturer_cnpj: response.data.manufacturer_cnpj,
          manufacturer_fantasy_name: response.data.manufacturer_fantasy_name,
          manufacturer_social_name: response.data.manufacturer_social_name,
          manufacturer_active: response.data.manufacturer_active,
          manufacturer_site: response.data.manufacturer_site,
          manufacturer_country: response.data.manufacturer_country,
          manufacturer_city: response.data.manufacturer_city,
          manufacturer_bairro: response.data.manufacturer_bairro,


          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newEmpresa() {
    this.setState({
      manufacture_id: null,
      manufacturer_name: "",
      manufacturer_cnpj : "", 
      manufacturer_fantasy_name  : "",
      manufacturer_social_name  : "",
      manufacturer_active  : "",
      manufacturer_site  : "",
      manufacturer_country  : "",
      manufacturer_city  : "",
      manufacturer_bairro   : "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newEmpresa}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Nome da empresa</label>
              <input
                type="text"
                className="form-control"
                id="manufacturer_name"
                required
                value={this.state.manufacturer_name}
                onChange={this.onChangeTitle}
                name="manufacturer_name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
