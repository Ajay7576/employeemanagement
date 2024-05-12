import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-EmployeeManagement-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent {
  employeeForm: FormGroup;
  addToList: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddEmployeeComponent>
  ) {
    this.employeeForm = this.formBuilder.group({
      // Initialize employeeForm with formBuilder
      employee_name: ['', Validators.required],
      employee_dateOfBirth: ['', Validators.required],
      employee_email: ['', [Validators.required, Validators.email]],
      employee_contact_No: [
        '',
        [Validators.required, Validators.pattern(/^\d{10}$/)],
      ],
      employee_address: ['', Validators.required],
      employee_age: ['', Validators.required],
      employee_Salary: ['', Validators.required],
      employee_zipCode: ['', Validators.required],
      employee_join_date: ['', Validators.required],
      employee_hobbies: [''],
      employee_shift_type: ['', Validators.required],
      department_name: ['', Validators.required],
      designation_name: ['', Validators.required],
      country_name: ['', Validators.required],
      state_name: ['', Validators.required],
      city_name: ['', Validators.required],
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  onSubmit() {
    if (this.employeeForm.valid) {
      // Process the form data
      console.log('Form submitted:', this.employeeForm.value);
    } else {
      // Mark all fields as touched to display validation errors
      this.markFormGroupTouched(this.employeeForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
