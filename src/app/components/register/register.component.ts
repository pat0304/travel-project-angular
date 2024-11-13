import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import CryptoJS from 'crypto-js';
let crypto: any = CryptoJS;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  register: any = new FormGroup({
    lastName: new FormControl<string>('', [Validators.required]),
    firstName: new FormControl<string>('', [Validators.required]),
    username: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    phone: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(11),
      Validators.pattern(/^[0]+\d{9,10}$/),
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(16),
      Validators.minLength(6),
    ]),
    rePassword: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(16),
      Validators.minLength(6),
    ]),
    gender: new FormControl<string>('', [
      Validators.required,
      Validators.required,
    ]),
    agree: new FormControl<boolean>(false, [
      Validators.required,
      Validators.requiredTrue,
    ]),
  });
  constructor(private route: Router) {}
  submit() {
    if (this.register.invalid) {
      return false;
    } else {
      return this.registerNow();
    }
  }
  async registerNow() {
    await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.register.value.username,
        phone: this.register.value.phone,
        email: this.register.value.email,
        firstName: this.register.value.firstName,
        lastName: this.register.value.lastName,
        password: crypto.AES.encrypt(
          this.register.value.password,
          'patrick'
        ).toString(),
      }),
    });
    this.route.navigate(['/']);
  }
}
