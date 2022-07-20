import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http
      .get(`${environment.endpoint}/mainmenu/indexbyrole`)
      .toPromise();
  }

  login(body: any) {
    return this.http.post(environment.endpoint + "/login", body);
  }
}
