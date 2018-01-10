import { Component, OnInit, Pipe, PipeTransform, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector: 'page-body',
  templateUrl: './pageBody.html',
  styleUrls: ['./pageBody.less']
})
export class PageBodyComponent implements OnInit {
  public test = 'TEST';
  @Input() pageStr:String;

  constructor() { }

  ngOnInit() {  }
}
