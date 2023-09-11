import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  email: string = ''; // Initialize email property
  password: string = ''; // Initialize password property

  constructor(private apiService: AuthServiceService, private router: Router) {}
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

  singupApiCall() {
    const requestBody = {
      userName: this.email,
      password: this.password,
    };

    this.apiService.signUp(requestBody).subscribe({
      next: (res) => {
        // Handle successful response
        Swal.fire('Good job!', res.message, 'success');
      },
      error: (error) => {
        // console.error(error);
        Swal.fire({
          // icon: 'error',
          // title: error.message,
          text: 'Something went wrong!',
        });
        // Handle error
      },
    });
  }
  redirectToRegistration(): void {
    this.router.navigateByUrl('/login');
  }
}
