import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      try {
        await emailjs.send(
          'service_2f7trvb',
          'template_s9lpngr',
          {
            from_name: this.contactForm.value.name,
            from_email: this.contactForm.value.email,
            message: this.contactForm.value.message,
            subject: this.contactForm.value.subject,
          },
          'rbP9qmtzkxQh-rHXs'
        );

        this.submitSuccess = true;
        this.contactForm.reset();
      } catch (error) {
        console.error('Error sending:', error);
        this.submitError = true;
      } finally {
        this.isSubmitting = false;
        if (this.submitSuccess) {
          setTimeout(() => {
            this.submitSuccess = false;
          }, 0);
        }
      }
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
