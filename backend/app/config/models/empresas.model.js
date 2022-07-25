module.exports = (sequelize, Sequelize) => {
    const Empresa = sequelize.define("empresa", {

      manufacturer_name: {
        type: Sequelize.STRING
      },
        manufacturer_cnpj: {
        type: Sequelize.STRING
      },
      manufacturer_fantasy_name: {
        type: Sequelize.STRING
      },
      manufacturer_social_name: {
        type: Sequelize.STRING
      },
      manufacturer_active:{
        type: Sequelize.STRING
      },
      manufacturer_site:{
        type: Sequelize.STRING
      },
      manufacturer_country:{
        type: Sequelize.STRING
      },
      manufacturer_city:{
        type: Sequelize.STRING
      },
      manufacturer_bairro:{
        type: Sequelize.STRING
      },

    });
  
    return Empresa;
  };