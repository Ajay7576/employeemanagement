import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Employee {
  name: string;
  position: string;
  salary: number;
}

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'position', 'salary', 'actions'];
  dataSource: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    const employees: Employee[] = [
      { name: 'John Doe', position: 'Developer', salary: 50000 },
      { name: 'Jane Smith', position: 'Manager', salary: 60000 },
      { name: 'Tom Brown', position: 'Designer', salary: 45000 },
      // Add more employees as needed
    ];

    this.dataSource = new MatTableDataSource(employees);
  }

  ngOnInit(): void {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
