import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { faTrash, faEdit, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
})

export class EmployeesListComponent {

  employees: Array<Employee> = []
  faTrash = faTrash
  faEdit = faEdit
  faEye = faEye

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (response) => {
        console.log(response)
      }
    })
  }
}
