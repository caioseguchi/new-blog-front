import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../../services/register.service';

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
    private registerService: RegisterService,
    private toastService: ToastrService
  ) {
    //Create form
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  //Submit Funtion
  onSubmit() {
    const { email, name, password, passwordConfirm } =
      this.registerForm.getRawValue();

    // (opcional) validar confirmação de senha
    if (password !== passwordConfirm) {
      this.toastService.error('Passwords do not match');
      return;
    }

    this.registerService.register(name, email, password).subscribe({
      next: (response) => {
        if (response?.token) {
          this.toastService.success('Account created!');
          this.router.navigate(['/login']);
        }
      },
      error: () => this.toastService.error('Register failed'),
    });
  }
}
