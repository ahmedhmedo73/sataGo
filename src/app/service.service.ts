import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getNews():Observable<any>
  {
    return this.http.get("http://satafood.codesroots.com:3000/api/mainmenu/indexbyrole")
  }

  login(body){
    return this.http.post(environment.endpoint+'/login', body);
  }

}
