import { Component, OnInit } from '@angular/core';
import { LANGUAGES } from './languages';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "About me"
  intro = "Hi! I am Matthew, a Software Engineer based in the North of England. I enjoy creating things, whether that be in the frontend or the backend. My interest in development began when I started to try to modify game files. From there I went on to a Level 4 apprenticeship in software development where I got great experience dealing with both emerging and legacy technology!"
  languageIntro = "Fast-forward today and I have had the privilege to work on many different technology stacks, Here are a few technologies I’ve been working with recently:"
  languages = LANGUAGES
}
