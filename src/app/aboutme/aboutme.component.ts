import { Component, OnInit } from '@angular/core';

import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    var img = document.getElementById('img');
    var container = document.getElementById('about-me-container');
    var p = document.getElementById('p');
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        if (state.matches && img && container && p) {
          container.style.display = `block`;
          container.style.margin= `auto`;
          img.style.background = `url('../../assets/images/transparent4.png') no-repeat`;
          img.style.width = `150px`;
          img.style.height = `306px`;
          img.style.margin = `0 auto`;
          p.style.width= `80%`; 
          p.style.margin = `20px auto 3px auto`;
          p.style.fontSize = `calc(12px + .02vw)`;
          
         }
         else {
           if(img && container && p) {
            container.style.display = `flex`;
            img.style.background = `url('../../assets/images/transparent.png') no-repeat`;
            img.style.width = `447px`;
            img.style.height = `559px`;
            p.style.fontSize = `calc(9px + .5vw)`;
            p.style.width= `49%`; 
            p.style.margin = `100px 0 0 .1%`
            img.style.margin = `0 `;
           }
        }
      });
  }

}
