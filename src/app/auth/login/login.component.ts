import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = ''; // Initialize email property
  password: string = ''; // Initialize password property

  constructor(
    // private formBuilder: FormBuilder,
    private apiService: AuthServiceService,
    private router: Router
  ) {}

  // get f() {
  //   return this.registerForm.controls;
  // }

  // onSubmit() {
  //   this.submitted = true;

  //   if (this.registerForm.invalid) {
  //     return;
  //   }

  //   if (this.submitted) {
  //     alert('login successfully');
  //   }
  // }

  // ngOnInit() {
  //   this.registerForm = this.formBuilder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required]],
  //   });
  // }

  makeApiCall() {
    const requestBody = {
      userName: this.email,
      password: this.password,
    };

    this.apiService.signIn(requestBody).subscribe(
      (res) => {
        this.router.navigateByUrl('/dashboard');
        Swal.fire('Good job!', res.message, 'success');
      },
      (error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: error.message,
          text: 'Something went wrong!',
        });
        // Handle error
      }
    );
  }

  redirectToRegistration(): void {
    this.router.navigateByUrl('/registration');
  }
}
