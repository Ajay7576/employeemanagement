import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'employeemanagement';
  menuItems = [
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'Employee List', route: '/employees' }, // Added Employee List item
    { label: 'Contact', route: '/contact' },
  ];
}
