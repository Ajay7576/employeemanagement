import { Component, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from './add-employee.component';

export interface Employee {
  name: string;
  dateOfBirth: string;
  email: string;
  contact_No: string;
  address: string;
  age: number;
  Salary: number;
  zipCode: string;
  join_date: string;
  hobbies: string;
  gender_id: number;
  shift_type: number;
  department_id: number;
  country_id: number;
  state_id: number;
  city_id: number;
}

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent {
  displayedColumns: string[] = [
    'name',
    'dateOfBirth',
    'email',
    'contact_No',
    'address',
    'age',
    'Salary',
    'zipCode',
    'join_date',
    'hobbies',
    'gender_id',
    'shift_type',
    'department_id',
    'country_id',
    'state_id',
    'city_id',
    'actions',
  ];
  dataSource: MatTableDataSource<Employee>;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {
    const employees: Employee[] = [
      {
        name: 'John Doe',
        dateOfBirth: '1980-01-01',
        email: 'john.doe@example.com',
        contact_No: '1234567890',
        address: '123 Main St',
        age: 40,
        Salary: 50000.0,
        zipCode: '12345',
        join_date: '2000-01-01',
        hobbies: 'Reading, Traveling',
        gender_id: 1,
        shift_type: 1,
        department_id: 1,
        country_id: 1,
        state_id: 1,
        city_id: 1,
      },
      {
        name: 'Jane Smith',
        dateOfBirth: '1985-05-15',
        email: 'jane.smith@example.com',
        contact_No: '0987654321',
        address: '456 Oak St',
        age: 35,
        Salary: 60000.0,
        zipCode: '54321',
        join_date: '2005-06-01',
        hobbies: 'Swimming, Painting',
        gender_id: 2,
        shift_type: 2,
        department_id: 2,
        country_id: 2,
        state_id: 2,
        city_id: 2,
      },
      {
        name: 'Alice Johnson',
        dateOfBirth: '1990-10-20',
        email: 'alice.johnson@example.com',
        contact_No: '9876543210',
        address: '789 Elm St',
        age: 30,
        Salary: 70000.0,
        zipCode: '67890',
        join_date: '2010-03-15',
        hobbies: 'Photography, Cooking',
        gender_id: 1,
        shift_type: 3,
        department_id: 3,
        country_id: 3,
        state_id: 3,
        city_id: 3,
      },
    ];

    this.dataSource = new MatTableDataSource(employees);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openAddEmployeeDialog() {
    this.dialog.open(AddEmployeeComponent, {
      width: '400px', // Specify the width of the dialog
    });
  }
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onPageChange(event: PageEvent) {
    // Update your data source here based on the new page event
    // For example, fetch data from a service or update an array of data
    // this.dataSource = fetchData(event.pageIndex, event.pageSize);
  }

  preview(row: any) {
    // Implement preview logic
  }

  edit(row: any) {
    // Implement edit logic
  }

  delete(row: any) {
    // Implement delete logic
  }
}
