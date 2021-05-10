import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-rsk',
  templateUrl: './rsk.component.html',
  styleUrls: ['./rsk.component.css']
})
export class RSKComponent implements OnInit {
  city = ["TS", "AP", "DELHI", "WEST BENGAL", "EAST BENGAL"];
  userModel = new User('jeevan', 'jeevankumar@gnail.com', '', 9160906084, 'chirumarri', '');
  mySerive: any;

  constructor() { }

  ngOnInit(): void {
  }
  sendMessage() {
    this.mySerive.sampleSubject.next('hello first component')
  }
}
