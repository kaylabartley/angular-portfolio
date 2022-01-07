import { Component, OnInit } from "@angular/core";
import {gsap} from "gsap";
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css'],
  animations: [
  ]
})
export class MenuButtonComponent implements OnInit {

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    var menu = document.getElementById('menu');
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        if (state.matches && menu) {
          menu.style.background = `rgb(0, 0, 0)`;
          
         }
         else {
           if(menu) {
            menu.style.background = `rgba(0, 0, 0, .5)`;
           }
        }
      });

  }


}
