import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface RegisterForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
}

@Component({
  selector: 'app-register.components',
  imports: [NavBar, CommonModule, ReactiveFormsModule],
  templateUrl: './register.components.html',
  styleUrl: './register.components.css',
})
export class RegisterComponents {
  //Declare Form
  registerForm!: FormGroup<RegisterForm>;

  //Constructor
  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  //Submit Funtion
  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }

  navigate() {
    this.router.navigate(['login']);
  }
}
