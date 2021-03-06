import { Component, OnInit } from '@angular/core';
import { INTERESTS } from './interests';

@Component({
  selector: 'app-personal-interests',
  templateUrl: './personal-interests.component.html',
  styleUrls: ['./personal-interests.component.css']
})
export class PersonalInterestsComponent implements OnInit {

  title = 'Personal Interests';
  content = 'When I am not coding my next project, I enjoy spending my time doing any of the following:';
  interests = INTERESTS;

  constructor() { }

  ngOnInit(): void {
  }
}
