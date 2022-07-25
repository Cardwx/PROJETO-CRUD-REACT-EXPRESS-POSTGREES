import React, { Component } from "react";
import EmpresaDataService from "../services/empresa.service";

export default class AddEmpresa extends Component {
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
      manufacturer_cnpj: "",
      manufacturer_name: "",
      manufacturer_fantasy_name:"",
      manufacturer_social_name:"",
      manufacturer_active:"",
      manufacturer_site:"",
      manufacturer_country:"",
      manufacturer_city:"",
      manufacturer_bairro:"",
   
      submitted: false
    };
  }
  onChangeManufacturerName(e) {
    this.setState({manufacturer_name: e.target.value });}

   // altera cnpj
   onChangeManufacturerCnpj(e){
    this.setState({manufacturer_cnpj: e.target.value});}

  // altera nome fantasia
  onChangeManufacturerFantasyName(e){
    this.setState({manufacturer_fantasy_name: e.target.value});}

  //altera nome social
  onChangeManufacturerSocialName(e){
    this.setState({manufacturer_social_name: e.target.value});}

    //altera se está ativa ou não
  onChangeManufacturerActive(e){
    this.setState({manufacturer_active: e.target.value});}

    //altera site
  onChangeManufacturerSite(e){
    this.setState({manufacturer_site: e.target.value});}

    //altera pais
  onChangeManufacturerCountry(e){
    this.setState({manufacturer_country: e.target.value});}

    //altera cidade
  onChangeManufacturerCity(e){
    this.setState({manufacturer_city: e.target.value});}

    //altera bairro
  onChangeManufacturerBairro(e){
    this.setState({manufacturer_bairro: e.target.value});}

  saveEmpresa() {
    var data = {
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
          manufacturer_name: response.data.manufacturer_name,
          manufacturer_cnpj: response.data.manufacturer_cnpj,
          manufacturer_fantasy_name: response.data.manufacturer_fantasy_name,
          manufacturer_social_name: response.data.manufacturer_social_name,
          manufacturer_active: response.data.manufacturer_active,
          manufacturer_site: response.data.manufacturer_site,
          manufacturer_country: response.data.manufacturer_country,
          manufacturer_city: response.data.manufacturer_city,
          manufacturer_bairro: response.data.manufacturer_bairro,
          published: response.data.published,
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
      manufacturer_fantasy_name: "",
      manufacturer_social_name: "",
      manufacturer_active: "",
      manufacturer_site: "",
      manufacturer_country: "",
      manufacturer_city: "",
      manufacturer_bairro:"",
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
              <label htmlFor="manufacturer_name">Nome da empresa:</label>
              <input
                type="text"
                className="form-control"
                id="manufacturer_name"
                required
                value={this.state.manufacturer_name}
                onChange={this.onChangeManufacturerName}
                name="manufacturer_name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="manufacturer_cnpj">CNPJ:</label>
              <input
                type="number"
                className="form-control"
                id="manufacturer_cnpj"
                required
                value={this.state.manufacturer_cnpj}
                onChange={this.onChangeManufacturerCnpj}
                name="manufacturer_cnpj"
              />
            </div>
              
            <div className="form-group">
              <label htmlFor="manufacturer_fantasy_name">Nome Fantasia:</label>
              <input
                type="text"
                className="form-control"
                id="manufacturer_fantasy_name"
                required
                value={this.state.manufacturer_fantasy_name}
                onChange={this.onChangeManufacturerFantasyName}
                name="manufacturer_fantasy_name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="manufacturer_social_name">Nome Social:</label>
              <input
                type="text"
                className="form-control"
                id="manufacturer_social_name"
                required
                value={this.state.manufacturer_social_name}
                onChange={this.onChangeManufacturerSocialName}
                name="manufacturer_social_name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="manufacturer_active">Ativo?</label>
              <input
                type="text"
                className="form-control"
                id="manufacturer_active"
                required
                value={this.state.manufacturer_active}
                onChange={this.onChangeManufacturerActive}
                name="manufacturer_active"
              />
            </div>

            <div className="form-group">
              <label htmlFor="manufacturer_site">Site:</label>
              <input
                type="text"
                className="form-control"
                id="manufacturer_site"
                required
                value={this.state.manufacturer_site}
                onChange={this.onChangeManufacturerSite}
                name="manufacturer_site"
              />
            </div>

            <div className="form-group">
              <label htmlFor="manufacturer_country">País:</label>
              <input
                type="text"
                className="form-control"
                id="manufacturer_country"
                required
                value={this.state.manufacturer_country}
                onChange={this.onChangeManufacturerCountry}
                name="manufacturer_country"
              />
            </div>

            
            <div className="form-group">
              <label htmlFor="manufacturer_city">Cidade:</label>
              <input
                type="text"
                className="form-control"
                id="manufacturer_city"
                required
                value={this.state.manufacturer_city}
                onChange={this.onChangeManufacturerCity}
                name="manufacturer_city"
              />
            </div>

            <div className="form-group">
              <label htmlFor="manufacturer_bairro">Bairro:</label>
              <input
                type="text"
                className="form-control"
                id="manufacturer_bairro"
                required
                value={this.state.manufacturer_bairro}
                onChange={this.onChangeManufacturerBairro}
                name="manufacturer_bairro"
              />
            </div>
            <button onClick={this.saveEmpresa} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
