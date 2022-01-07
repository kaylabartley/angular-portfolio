import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { TitleComponent } from './title/title.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { AboutmeComponent } from './aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxComponent,
    TitleComponent,
    TimelineComponent,
    MenuButtonComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
