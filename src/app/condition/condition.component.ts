import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {
  name=true;
   colors=["red,blue,green"];

  // sam=true;

  constructor() { }

  ngOnInit(): void {
  }

}
