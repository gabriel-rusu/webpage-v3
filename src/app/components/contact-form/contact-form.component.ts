import {Component, ElementRef, signal, ViewChild, ViewChildren} from '@angular/core';
import * as emailjs from "@emailjs/browser";
import {FormsModule, NgForm} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  fullName= signal<string>('');
  message = signal<string>('');
  email = signal<string>('');

  @ViewChild('toggle') toggle: any;
  @ViewChild('form') form?: NgForm;

  sendEmail() {
    const templateParams = {
      full_name: this.fullName(),
      message: this.message(),
      email: this.email()
    }
    emailjs.init('3OBVYlu1jm4XBAIb6');
    emailjs.send('service_rv6skes', 'template_vbmyzuh', templateParams).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.form?.resetForm()
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
  }
}
