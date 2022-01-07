import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  public trigger1: any;
  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {

    console.clear();
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
    gsap.defaults({ease: "none"});

    var svg = document.getElementById('svg');
    var svgSmall = document.getElementById('svg-small');
    var planets = document.getElementById('planets');
    var skillList = document.getElementById('skill-list');
    var mouseScroll = document.getElementById('mouse_scroll');

    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        if (state.matches && svg && svgSmall && planets && skillList && mouseScroll) {
          planets.style.display = `none`;
          mouseScroll.style.margin = `0 42vw`;
          skillList.style.display = `flex`;
          svg.style.display = `none`;
          svgSmall.style.display = `block`;
          const pulses = gsap.timeline({
            defaults: {
              duration: 0.05, 
              autoAlpha: 1, 
              scale: 2, 
              transformOrigin: 'center', 
              ease: "elastic(2.5, 1)"
            }})
            .to(".ball2, .text1", {}, 0.2) 
            .to(".ball2, .d1", {}, 0.2)
            .to(".ball3, .text2", {}, 0.33)
            .to(".ball3, .d2", {}, 0.33)
            .to(".ball4, .text3", {}, 0.46)
            .to(".ball4, .d3", {}, 0.46)
            .to(".ball5, .text4", {}, 0.59)
            .to(".ball5, .d4", {}, 0.59)
          var num : gsap.BooleanValue | gsap.DrawSVGTarget | undefined = false;
          this.trigger1 = gsap.timeline({defaults: {duration: 1},
            scrollTrigger: {
              trigger: "#svg-small",
              scrub: true,
              start: "top -200",
              end: "bottom 1100"
            }})
          .to(".ball1", {duration: 0.01, autoAlpha: 1})
          .from(".theline", {drawSVG: num}, 0)
          .to(".ball1", {motionPath: {
            path: ".theline", 
            align:".theline",
            alignOrigin: [0.5, 0.5],
          }}, 0)
          .add(pulses, 0);
         }
         else {
           if(svgSmall && svg && planets && skillList && mouseScroll) {
              planets.style.display = `flex`;
              mouseScroll.style.margin = `0 47%`;
              skillList.style.display = `none`;
             svgSmall.style.display = `none`;
             svg.style.display= `block`;
           }
          const pulses = gsap.timeline({
            defaults: {
              duration: 0.05, 
              autoAlpha: 1, 
              scale: 2, 
              transformOrigin: 'center', 
              ease: "elastic(2.5, 1)"
            }})
            .to(".ball02, .text01", {}, 0.2) 
            .to(".ball02, .D1", {}, 0.2)
            .to(".ball03, .text02", {}, 0.33)
            .to(".ball03, .D2", {}, 0.33)
            .to(".ball04, .text03", {}, 0.46)
            .to(".ball04, .D3", {}, 0.46)
            .to(".ball05, .text04", {}, 0.59)
            .to(".ball05, .D4", {}, 0.59)
          var num : gsap.BooleanValue | gsap.DrawSVGTarget | undefined = false;
          this.trigger1 = gsap.timeline({defaults: {duration: 1},
            scrollTrigger: {
              trigger: "#svg",
              scrub: true,
              start: "top 20",
              end: "bottom 600"
            }})
          .to(".ball01", {duration: 0.01, autoAlpha: 1})
          .from(".theLine", {drawSVG: num}, 0)
          .to(".ball01", {motionPath: {
            path: ".theLine", 
            align:".theLine",
            alignOrigin: [0.5, 0.5],
          }}, 0)
          .add(pulses, 0);
         }
      });

  }
}
