import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'working-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.scss']
})
export class WorkbenchComponent implements OnInit {
  public test = 'TEST';
  public temp:String = "<h1>Test Text</h1>";

  constructor() { }

  ngOnInit() {  }

}
