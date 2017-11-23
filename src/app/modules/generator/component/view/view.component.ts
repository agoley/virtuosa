import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'generator-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let view: HTMLElement = document.getElementById('view');

    // Test setting the html of the view.
    view.innerHTML = "<h2 class='mdc-typography--display2'>Hello, Material Components!</h2>" +
      "<div class='mdc-text-field' data-mdc-auto-init='MDCTextField'>" +
      "<input type='text' class='mdc-text-field__input' id='demo-input'>" +
      "<label for='demo-input' class='mdc-text-field__label'>Tell us how you feel!</label>" +
      "</div>";
  }

}
