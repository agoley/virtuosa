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
  selector: 'cms-core',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.less']
})
export class CMSComponent implements OnInit {
  public test = 'TEST';
  public temp:String = '<style> .red { color: red;} </style> <h1>Test Text</h1> <input class="t2" value="try hard"/> <p class="red">Color test</p>';

  constructor() { }

  ngOnInit() {  }

}
