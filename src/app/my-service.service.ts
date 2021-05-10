import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  // url = "https://jsonplaceholder.typicode.com/users";
url
  sampleSubject: any;
  constructor(public http: HttpClient) { }
  getData() {
    return this.http.get(this.url);
  }
}
