import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  studentForm: FormGroup;
  isEdit: boolean = false;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      $id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: [
        null,
        [Validators.required, Validators.pattern(/^[0-9]+$/)],
      ],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.isEdit) {
      // Handle the update operation
      this.onUpdate();
    } else {
      // Handle the create operation
      this.create();
    }
  }

  create() {
    // Implement the logic to create a new student here
    const formData = this.studentForm.value;
    console.log('Creating student:', formData);
    // You can send the formData to your API or service
    // to create a new student record.
  }

  onUpdate() {
    // Implement the logic to update an existing student here
    const formData = this.studentForm.value;
    console.log('Updating student:', formData);
    // You can send the formData to your API or service
    // to update an existing student record.
  }

  handleDelete() {
    // Implement the logic to delete a student here
    const formData = this.studentForm.value;
    console.log('Deleting student:', formData);
    // You can send the formData or student ID to your API or service
    // to delete the corresponding student record.
  }

  resetForm() {
    this.studentForm.reset();
    this.isEdit = false;
  }
}
