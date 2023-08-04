import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
})
export class AddEmployeeComponent {
  addEmployeeRequest: Employee = {
    id: '',
    fullName: '',
    profile: '',
    email: '',
    phone: '0',
    salary: 0,
    department: ''
  }

  constructor(private employeeService: EmployeesService, private router: Router) { }

  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeRequest).subscribe({
      next: (employee) => {
        this.router.navigate(['employees'])
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
