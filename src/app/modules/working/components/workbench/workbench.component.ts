import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector: 'working-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.scss']
})
export class WorkbenchComponent implements OnInit {
  public test = 'TEST';
  public temp:String = '<style> .red { color: red;} </style> <h1>Test Text</h1> <input class="t2" value="try hard"/> <p class="red">Color test</p>';

  constructor() { }

  ngOnInit() {  }

}
