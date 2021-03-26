import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class WorkHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Work History"
  jobs = JOBS
  

}

const JOBS = [
  {timeInJobAndJobTitle: "March 2021-Present - Software Engineer", content:'Superman'},
  {timeInJobAndJobTitle: "Jan 2019-March 2021 - Junior Software Engineer", content:'Batman'},
  {timeInJobAndJobTitle: "Sep 2017-Jan 2019 - Apprentice Software Engineer", content:'BatGirl'},
];