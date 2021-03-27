import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  form: FormGroup;
  name: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  message: FormControl = new FormControl('', [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(''); // we will use this to prevent spam
  submitted = false; // show and hide the success message
  isLoading = false; // disable the submit button if we're loading
  responseMessage = 'Hello! I see you peeping'; // the response message to show to the user
  title = 'Contact me';
  content = 'Have a question or want to work together?';
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.status === 'VALID' && this.honeypot.value === '') {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      const formData: FormData = new FormData();
      formData.append('name', this.form.get('name')?.value);
      formData.append('email', this.form.get('email')?.value);
      formData.append('message', this.form.get('message')?.value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.http.post(
        'https://script.google.com/macros/s/AKfycbwWhcz7Hm4wPLtc8DIIMK6IoEm03hXupZ-JDIHDTIz6DUIW00Q6FC0MqVEaRxNBgXkbqQ/exec',
         formData
        ).subscribe(
        (response) => {
          // choose the response message
          const commingResponse: any  = response;
          const key = 'result';

          if (commingResponse[key] === 'success') {
            this.responseMessage = 'Thanks for the message! I\'ll get back to you soon!';
          } else {
            this.responseMessage = 'Oops! Something went wrong... Reload the page and try again.';
          }

          this.form.reset();
          this.form.markAsPristine();
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(response);
        },
        (error) => {
          this.responseMessage = 'Oops! An error occurred... Reload the page and try again.';
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(error);
        }
      );
    }
  }
}
