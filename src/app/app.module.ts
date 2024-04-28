import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Import the ReactiveFormsModule
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppRoutingModule } from './app-routing.module'; // Import your AppRoutingModule
import { AppComponent } from './app.component';

import { AddEmployeeComponent } from './EmployeeManagement/add-employee.component';
import { EmployeesListComponent } from './EmployeeManagement/employees-list.component'; // Import EmployeesListComponent

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeesListComponent, // Declare EmployeesListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Add ReactiveFormsModule to the imports array
    RouterModule, // Add RouterModule to the imports array
    AppRoutingModule, // Add your AppRoutingModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
