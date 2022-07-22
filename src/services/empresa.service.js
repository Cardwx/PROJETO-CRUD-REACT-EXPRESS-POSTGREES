import http from "../http-common";
class EmpresaDataService {
  getAll() {
    return http.get("/empresas");
  }
  get(manufacturer_cnpj) {
    return http.get(`/empresas/${manufacturer_cnpj}`);
  }
  create(data) {
    return http.post("/empresas", data);
  }
  update(manufacturer_cnpj, data) {
    return http.put(`/empresas/${manufacturer_cnpj}`, data);
  }
  delete(manufacturer_cnpj) {
    return http.delete(`/empresas/${manufacturer_cnpj}`);
  }
  deleteAll() {
    return http.delete(`/empresas`);
  }
  findByTitle(manufacturer_cnpj) {
    return http.get(`/empresas?title=${manufacturer_cnpj}`);
  }
}
export default new EmpresaDataService();