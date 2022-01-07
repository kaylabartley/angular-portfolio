import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/all';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    let aboutme = document.getElementById('about-me');
    let next = document.getElementById('next');
    let timeline = document.getElementById('timeline');
    let linkedIn = document.getElementById('linkedin');
    let footer = document.getElementById('footer');

    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        if (state.matches && timeline && linkedIn && footer) {
          timeline.style.height = `570vh`;
          linkedIn.style.width= `200px`;
          linkedIn.style.height= `200px`;
          linkedIn.style.backgroundImage = `url("../../assets/images/linkedin2.png")`;
          footer.style.fontSize = `10px`;
         }
        else if(timeline && linkedIn && footer) {
          timeline.style.height = `800vh`;
          linkedIn.style.width= `500px`;
          linkedIn.style.height= `500px`;
          linkedIn.style.backgroundImage = `url("../../assets/images/linkedin.png")`;
          footer.style.fontSize = `20px`;
        }
      });

     // Give the backgrounds some random images
     if(next){
      next.style.backgroundColor =`black`;
      next.style.backgroundPosition = `50% ${-innerHeight / 2}px`
     }
     if(aboutme){
      aboutme.style.backgroundImage =`url(https://images.pexels.com/photos/3607542/pexels-photo-3607542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=${innerHeight}&w=${innerWidth})`;
      aboutme.style.backgroundPosition = `50% ${-innerHeight / 2}px`
     }
     if(timeline){
      timeline.style.backgroundImage =`url(https://images.pexels.com/photos/9190535/pexels-photo-9190535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=${innerHeight}&w=${innerWidth})`;
      timeline.style.backgroundPosition = `50% ${-innerHeight / 2}px`;
     }
     /*if(next1){
      next1.style.backgroundImage = `url(https://images.pexels.com/photos/450055/pexels-photo-450055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=${innerHeight}&w=${innerWidth})`;
      next1.style.backgroundPosition = `50% ${-innerHeight / 2}px`;
     }*/
  // Set the initial position for the background
    // Register the ScrollTrigger plugin with gsap
    gsap.registerPlugin(ScrollTrigger);

    
    //Loop over all the sections and set animations
    gsap.utils.toArray("section").forEach((section: any, i) => {
      
      // Set the bg variable for the section
      section.bg = section.querySelector(".bg");

      // Do the parallax effect on each section
      gsap.to(section.bg, {
        backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: "none", // Don't apply any easing function.
        scrollTrigger: {
          // Trigger the animation as soon as the section comes into view
          trigger: section, 
          // Animate on scroll/scrub
          scrub: .2
        }
      });
    });
  }

}
