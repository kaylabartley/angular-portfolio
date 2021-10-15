import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/all';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let next = document.getElementById('next');
    let next1 = document.getElementById('next1');
     // Give the backgrounds some random images
     if(next){
      next.style.backgroundImage =`url(https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=${innerHeight}&w=${innerWidth})`;
      next.style.backgroundPosition = `50% ${-innerHeight / 2}px`
     }
     if(next1){
      next1.style.backgroundImage = `url(https://images.pexels.com/photos/450055/pexels-photo-450055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=${innerHeight}&w=${innerWidth})`;
      next1.style.backgroundPosition = `50% ${-innerHeight / 2}px`;
     }
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
