import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector:'cms-menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.less']
})
export class MenuComponent {
    @Output() toggleEvent = new EventEmitter<string>();
    constructor(){}

    /* Functions */
    toggleSideNav() {
      this.toggleEvent.next();
    }    
}