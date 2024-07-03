import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Import the ReactiveFormsModule
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppRoutingModule } from './app-routing.module'; // Import your AppRoutingModule
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CustomPopUpComponent } from './EmployeeManagement/custom-pop-up.component';

import { AddEmployeeComponent } from './EmployeeManagement/add-employee.component';
import { EmployeesListComponent } from './EmployeeManagement/employees-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import EmployeesListComponent
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeesListComponent, // Declare EmployeesListComponent
    CustomPopUpComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule, // Add ReactiveFormsModule to the imports array
    RouterModule, // Add RouterModule to the imports array
    AppRoutingModule,
    BrowserAnimationsModule, // Add your AppRoutingModule to the imports array
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
