import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from './add-employee.component';
import { ApiService } from '../api.service';

export interface Employee {
  employee_name: string;
  employee_dateOfBirth: string;
  employee_email: string;
  employee_contact_No: string;
  employee_address: string;
  employee_age: number;
  employee_Salary: number;
  employee_zipCode: string;
  employee_join_date: string;
  employee_hobbies: string;
  gender_type: string;
  employee_shift_type: number;
  department_name: string;
  designation_name: string;
  country_name: string;
  state_name: string;
  city_name: string;
}

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'employee_name',
    'employee_dateOfBirth',
    'employee_email',
    'employee_contact_No',
    'employee_address',
    'employee_age',
    'employee_Salary',
    'employee_zipCode',
    'employee_join_date',
    'employee_hobbies',
    'gender_type',
    'employee_shift_type',
    'department_name',
    'designation_name',
    'country_name',
    'state_name',
    'city_name',
    'actions',
  ];
  dataSource = new MatTableDataSource<Employee>();
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  sortField: string = 'employee_name'; // Default sorting field
  sortDirection: string = 'asc'; // Default sorting direction
  searchField: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  loadData(): void {
    debugger;
    let url = this.buildApiUrl();

    this.apiService.getData<Employee[]>(url).subscribe(
      (response: any) => {
        debugger;
        // Parse JSON response to Employee array
        if (response && response.length > 0) {
          try {
            let jsonString = JSON.parse(response);

            this.dataSource.data = jsonString.data;
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }
        } else {
          console.error('Empty or invalid response:', response);
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  buildApiUrl(): string {
    return `api/employe?searchTerm=${this.searchField}&sortBy=${this.sortField}&sortDirection=${this.sortDirection}&pageNumber=1&pageSize=${this.pageSize}`;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.loadData();
  }

  openAddEmployeeDialog(): void {
    this.dialog.open(AddEmployeeComponent, {
      width: '400px',
    });
  }

  sortData(event: any): void {
    debugger;

    this.sortField = event.active;
    this.sortDirection = event.direction;
    this.loadData();
  }

  preview(row: Employee): void {
    debugger
    // Implement preview logic if needed
  }

  edit(row: Employee): void {
    debugger
    // Implement edit logic if needed
  }

  delete(row: Employee): void {
    debugger
    // Implement delete logic if needed
  }
}
