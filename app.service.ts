import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ProfileService {
  url = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) {}
  getData(data) {
    console.log("got clicked ser", data);
    return this.httpClient.post(this.url + "register", data);
  }
  getUser() {
    return this.httpClient.get(this.url + "getUser");
  }

  deleteUser(u) {
    return this.httpClient.post(this.url + "deleteUser", u);
  }

  updateUser(data) {
    console.log("got clicked ser", data);
    return this.httpClient.post(this.url + "updateUser", data);
  }
}
