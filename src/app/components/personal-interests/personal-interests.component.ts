import { Component, OnInit } from '@angular/core';
import { INTERESTS } from './interests';

@Component({
  selector: 'personal-interests',
  templateUrl: './personal-interests.component.html',
  styleUrls: ['./personal-interests.component.css']
})
export class PersonalInterestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Personal Interests"
  content = "When I am not coding my next project, I enjoy spending my time doing any of the following:"
  interests = INTERESTS

}