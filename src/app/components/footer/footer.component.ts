import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../module/User';
let crypto = require('crypto-js');
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  loginForm: any = new FormGroup({
    username: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(16),
      Validators.minLength(6),
    ]),
    rememberMe: new FormControl<boolean>(false),
  });

  user: User = inject(User);
  submit() {
    if (!this.loginForm.valid) return false;
    this.closeTab();
    return this.user.loginNow(
      this.loginForm.value.username,
      crypto.AES.encrypt(this.loginForm.value.password, 'patrick').toString()
    );
  }
  closeTab() {
    const login: any = document.getElementById('login');
    const body: any = document.querySelector('body');
    const bglog: any = document.querySelector('.modal-backdrop');
    login.remove();
    body.classList.remove('modal-open');
    body.style = '';
    bglog.remove();
  }
  ngOnInit() {
    const btnPassword: any = document.getElementById('button-addon-1');
    let inputPassword: any = document.getElementById('password-input');
    btnPassword.addEventListener('click', function (e: any) {
      let btn = e.target;
      if (inputPassword.getAttribute('type') === 'password') {
        btn.classList.remove('bi-eye-fill');
        btn.classList.add('bi-eye-slash-fill');
        inputPassword.setAttribute('type', 'text');
      } else {
        inputPassword.setAttribute('type', 'password');
        btn.classList.remove('bi-eye-slash-fill');
        btn.classList.add('bi-eye-fill');
      }
    });
  }
}
