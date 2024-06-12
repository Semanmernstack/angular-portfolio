import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit  {
  

  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }

  

  ngOnInit(): void {
    
    
  }
  onSubmit() {
    if (this.contactForm.valid) {
      // Handle form submission here
      const formData = this.contactForm.value;
      // Simulate submitting the form data
      console.log(formData);

      // Show alert
      alert('Form submitted successfully!');
      
      // Reset the form
      this.contactForm.reset();
      console.log(this.contactForm.value);
    } else {
      // Mark fields as touched to trigger validation messages
      this.contactForm.markAllAsTouched();
    }
  }
}


