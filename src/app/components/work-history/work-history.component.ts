import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { STEPPERICONS } from './stepper-icons';
import { JOBS } from './jobs';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class WorkHistoryComponent implements OnInit {

  title = 'Work History';
  steppericons = STEPPERICONS;
  jobs = JOBS;

  constructor() { }

  ngOnInit(): void {
  }
}
