import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Componentjsondata } from 'src/assets/db';
// import { Componentjsondata } from 
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent implements OnInit {

  jsondata = Componentjsondata;
  constructor(private http: HttpClient) { }
  // constructor() { }
  ngOnInit(): void {
  }
  register() {
    let object = {
      "id": 4,
      "name": "vinay",
      "email": "jeevankumarpallapati@gmail.com",
      "Address": "chirumarri",
      "number": 9949803475
    }
    this.jsondata.post.push(object);
  }

  onSubmit(data) {
    this.http.post('http://localhost:3000/posts', data).subscribe((result) => {
      console.warn("result", result);
    })
    console.log("data", data);
  }

}
