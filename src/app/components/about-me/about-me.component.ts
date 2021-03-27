import { Component, OnInit } from '@angular/core';
import { LANGUAGES } from './languages';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  title = 'About me';
  intro = 'Hi! I am Matthew (He/Him) 🏳️‍🌈, a Software Engineer based in the North of England. I enjoy creating things! My interest in development began when I started to try to modify game files. From there I went on to a Level 4 apprenticeship in software development where I got great experience dealing with both emerging and legacy technology!';
  languageIntro = 'Fast-forward today and I have had the privilege to work on many different technology stacks, Here are a few technologies I’ve been working with recently:';
  languages = LANGUAGES;

  constructor() { }

  ngOnInit(): void {
  }
}
