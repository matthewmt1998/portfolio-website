import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class WorkHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Work History"
  steppericons = STEPPERICONS
  jobs = JOBS


}

const STEPPERICONS = [
  { stepperStatus: "number", icon: 'work' },
  { stepperStatus: "edit", icon: 'work_outline' },
  { stepperStatus: "done", icon: 'work_outline' }
]

const JOBS = [
  { timeInJobAndJobTitle: "March 2021-Present - Software Engineer", content: 'Superman', img: "assets/img/waterslogo.png" },
  { timeInJobAndJobTitle: "Jan 2019-March 2021 - Junior Software Engineer", content: 'Batman', img: "assets/img/waterslogo.png" },
  { timeInJobAndJobTitle: "Sep 2017-Jan 2019 - Apprentice Software Engineer", content: 'BatGirl', img: "assets/img/mdlogo.png" }
];