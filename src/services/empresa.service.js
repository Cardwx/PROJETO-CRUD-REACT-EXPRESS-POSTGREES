import http from "../http-common";
class EmpresaDataService {
  getAll() {
    return http.get("/empresas");
  }
  get(id) {
    return http.get(`/empresas/${id}`);
  }
  create(data) {
    return http.post("/empresas", data);
  }
  update(id, data) {
    return http.put(`/empresas/${id}`, data);
  }
  delete(id) {
    return http.delete(`/empresas/${id}`);
  }
  deleteAll() {
    return http.delete(`/empresas`);
  }
  findByTitle(manufacturer_name) {
    return http.get(`/empresas?title=${manufacturer_name}`);
  }
}
export default new EmpresaDataService();