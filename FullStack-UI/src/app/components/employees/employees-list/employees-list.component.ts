import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
})

export class EmployeesListComponent {

  employees: Array<Employee> = []

  faEye = faEye

  loadEmployee: boolean = false

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.loadEmployee = true
    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (response) => {
        console.log(response)
      },
      complete: () => {
        this.loadEmployee = false
      },
    })
  }
}
