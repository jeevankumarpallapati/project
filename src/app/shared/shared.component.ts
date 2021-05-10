import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  @Input() parent: any;
  @Output() child = new EventEmitter;
  childData = 'angular data interaction';
  constructor() { }

  ngOnInit(): void {
  }
  sendMessage() {
    this.child.emit('hello' + this.parent)
  }

}
