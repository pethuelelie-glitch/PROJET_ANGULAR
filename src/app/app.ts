import { Component, AfterViewInit } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Facts } from './components/facts/facts';
import { Services } from './components/services/services';
import { Video } from './components/video/video';
import { Portfolio } from './components/portfolio/portfolio';
import { Project } from './components/project/project';
import { Resume } from './components/resume/resume';
import { Testimonial } from './components/testimonial/testimonial';
import { Blog } from './components/blog/blog';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Header, Hero, About, Facts, Services, Video, Portfolio,
    Project, Resume, Testimonial, Blog, Contact, Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  ngAfterViewInit(): void {
    // Lance les animations du template quand toute la page est affichée
    (window as any).initTemplate?.();
  }
}