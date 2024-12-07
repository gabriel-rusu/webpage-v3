import {Component, signal} from '@angular/core';
import * as emailjs from "@emailjs/browser";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  fullName= signal<string>('');
  message = signal<string>('');
  email = signal<string>('');

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
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
  }
}
