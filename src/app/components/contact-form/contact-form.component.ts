import {Component, ElementRef, inject, signal, ViewChild, ViewChildren} from '@angular/core';
import * as emailjs from "@emailjs/browser";
import {FormsModule, NgForm} from "@angular/forms";
import {NgClass} from "@angular/common";
import {LoadingScreenComponent} from "../loading-screen/loading-screen.component";
import {LoadingScreenService} from "../../services/loading-screen.service";

@Component({
    selector: 'app-contact-form',
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
  loadingScreen = inject(LoadingScreenService);

  @ViewChild('toggle') toggle: any;
  @ViewChild('form') form?: NgForm;

  sendEmail() {
    this.loadingScreen.start();
    const templateParams = {
      full_name: this.fullName(),
      message: this.message(),
      email: this.email()
    }
    emailjs.init('3OBVYlu1jm4XBAIb6');
    emailjs.send('service_rv6skes', 'template_vbmyzuh', templateParams).then(
      (response) => {
        this.form?.resetForm()
        this.loadingScreen.stop();
      },
      (error) => {
        console.error('FAILED...', error);
        this.loadingScreen.stop();
      }
    );
  }
}
