import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Import the ReactiveFormsModule
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppRoutingModule } from './app-routing.module'; // Import your AppRoutingModule
import { AppComponent } from './app.component';
import { CustomPopUpComponent } from './EmployeeManagement/custom-pop-up.component';

import { AddEmployeeComponent } from './EmployeeManagement/add-employee.component';
import { EmployeesListComponent } from './EmployeeManagement/employees-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import EmployeesListComponent
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeesListComponent, // Declare EmployeesListComponent
    CustomPopUpComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Add ReactiveFormsModule to the imports array
    RouterModule, // Add RouterModule to the imports array
    AppRoutingModule,
    BrowserAnimationsModule, // Add your AppRoutingModule to the imports array
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
