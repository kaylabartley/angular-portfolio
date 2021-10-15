import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  public trigger1: any;
  constructor() { }

  ngOnInit(): void {

    console.clear();

    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
    gsap.defaults({ease: "none"});



    const pulses = gsap.timeline({
      defaults: {
        duration: 0.05, 
        autoAlpha: 1, 
        scale: 2, 
        transformOrigin: 'center', 
        ease: "elastic(2.5, 1)"
      }})
      .to(".ball02, .text01", {}, 0.2) 
      .to(".ball02, .d1", {}, 0.2)
      .to(".ball02, .LM1", {}, 0.2)
      .to(".ball03, .text02", {}, 0.33)
      .to(".ball03, .d2", {}, 0.33)
      .to(".ball04, .text03", {}, 0.46)
    var num : gsap.BooleanValue | gsap.DrawSVGTarget | undefined = false;
    this.trigger1 = gsap.timeline({defaults: {duration: 1},
      scrollTrigger: {
        trigger: "#svg",
        scrub: true,
        start: "top 20",
        end: "bottom 400"
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
}
