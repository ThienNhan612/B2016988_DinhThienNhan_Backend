import createApiClient from "./api.service";
class ContactService {
constructor(baseUrl = "/api/contacts") {
this.api = createApiClient(baseUrl);
}
async getAll() {
return (await this.api.get("/")).payload;
}
async create(payload) {
return (await this.api.post("/", payload)).payload;
}
async deleteAll() {
return (await this.api.delete("/")).payload;
}
async get(id) {
return (await this.api.get(`/${id}`)).payload;
}
async update(id, payload) {
return (await this.api.put(`/${id}`, payload)).payload;
}
async delete(id) {
return (await this.api.delete(`/${id}`)).payload;S
}
}
export default new ContactService();