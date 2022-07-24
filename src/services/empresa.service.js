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
  findByName(title) {
    return http.get(`/empresas?title=${title}`);
  }
}
export default new EmpresaDataService();