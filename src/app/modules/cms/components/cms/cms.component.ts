import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'cms-core',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.less']
})
export class CMSComponent implements OnInit {
  public test = 'TEST';
  public pageHtml:String = '<style> .red { color: red;} </style> <h1 class="item">Test Text2</h1> <input class="item t2" value="try hard"/> <p class="item red">Color test</p>';

  constructor() { }

  ngOnInit() {  
    $('.item').mouseover(function() {
        console.log("on item");
        $(this).addClass('borderClass');
    });
    $('.item').mouseleave(function() {
        console.log("off item");
        $(this).removeClass('borderClass');
    });
  }
}
