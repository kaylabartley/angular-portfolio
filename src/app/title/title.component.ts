import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    var kayla = document.getElementById('kayla');
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.XLarge])
      .subscribe((state: BreakpointState) => {
        if (state.matches && kayla) {
          kayla.style.fontSize = `12vw`;
         }
        else if(kayla) kayla.style.fontSize = `calc(20px + 9vw)`
      });
  }
}